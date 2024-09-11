<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="row items-center justify-evenly" style="height: calc(80vh - var(--header-height))">
      <div v-if="!videoMetadata || !videoStreamURL">
        {{ $t('error-message.cannot-load-video') }}
      </div>

      <q-scroll-area v-else style="width: 100%; height: 100%">
        <div class="q-mx-auto" style="width: 80%">
          <q-video
            :ratio="16/9"
            :src=videoStreamURL
          />

          <div class="text-h5 q-pt-sm">{{ videoMetadata.title }}</div>
          <div class="row text-bold">
            <div class="col">
              {{ $t('stream.by') }} {{ videoMetadata.creator }}
            </div>
            {{$t('stream.uploaded-date')}}: {{ dateService!.getFormattedDate(videoMetadata.upload_date) }}
          </div>
        </div>

        <div class="text-h5 q-pt-sm">{{ $t('stream.description') }}</div>
        {{ videoMetadata.description }}
      </q-scroll-area>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">

import {inject, onMounted, Ref, ref} from 'vue';
import {VideoMetadataDTO} from 'src/dtos/VideoMetadataDTO';
import {useRoute} from 'vue-router';
import {dateServiceInjectionKey, getVideoMetadataApiInjectionKey, streamVideoApiInjectionKey} from 'src/injection-keys';
import {IGetVideoMetadataApi} from 'src/services/apis/get-video-metadata/IGetVideoMetadataApi';
import {IStreamVideoApi} from 'src/services/apis/stream-video/IStreamVideoApi';
import {IDateService} from 'src/services/date-service/IDateService';

// Helpers
const route = useRoute();
const getVideoMetadataApi: IGetVideoMetadataApi | undefined = inject(getVideoMetadataApiInjectionKey);
const streamVideoApi: IStreamVideoApi | undefined = inject(streamVideoApiInjectionKey);
const dateService: IDateService | undefined = inject(dateServiceInjectionKey);

// Variables
const videoMetadata: Ref<VideoMetadataDTO | null> = ref(null);
const videoStreamURL = ref('');

onMounted(async () => {
  await loadVideoMetadata();

  if (videoMetadata.value?.id)
    await loadVideoStream();
})

async function loadVideoMetadata() {
  const videoId: string | null = route.query.id as string;
  if (!videoId)
    return;

  const response = await getVideoMetadataApi!.get(videoId);
  if (!response)
    return;

  videoMetadata.value = response;
}

async function loadVideoStream() {
  const response: string | null = await streamVideoApi!.get(videoMetadata.value!.id);
  if (response)
    videoStreamURL.value = response;
}
</script>
