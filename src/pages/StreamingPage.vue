<!--
This component realizes the streaming page in which a user can watch a video. Under the video, the title, creator, upload date and description are displayed.
-->
<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="row items-center justify-evenly" style="height: calc(80vh - var(--header-height))">
      <div v-if="!videoMetadata || !videoStreamURL">
        {{ $t('error-message.cannot-load-video') }}
      </div>

      <q-scroll-area v-else style="width: 100%; height: 100%">
        <!-- Video Stream - The video component requests a range of file content automatically with the passed URL. -->
        <div class="q-mx-auto" style="width: 80%">
          <video
            :src="videoStreamURL"
            controls autoplay style="aspect-ratio: 16 / 9; max-height: 50vh" class="q-mx-auto full-height full-width"
          >
            {{ $t('error-message.cannot-load-video') }}
          </video>

          <!-- Title, Creator, Upload Date -->
          <div class="text-h5 q-pt-sm">{{ videoMetadata.title }}</div>
          <div class="row text-bold full-width">
            <div class="col">
              {{ $t('stream.by') }} {{ videoMetadata.creator }}
            </div>
            {{ $t('stream.upload-date') }}: {{ dateService.getFormattedDate(videoMetadata.upload_date) }}
          </div>
        </div>

        <!-- Description -->
        <div class="text-h5 q-pt-md">{{ $t('stream.description') }}</div>
        <div class="q-pt-md">{{ videoMetadata.description }}</div>
      </q-scroll-area>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, Ref, ref } from 'vue';
import { VideoMetadataDTO } from 'src/dtos/VideoMetadataDTO';
import { useRoute } from 'vue-router';
import { dateServiceInjectionKey, getVideoMetadataApiInjectionKey } from 'src/injection-keys';
import { IGetVideoMetadataApi } from 'src/services/apis/get-video-metadata/IGetVideoMetadataApi';
import { IDateService } from 'src/services/date-service/IDateService';
import { streamApi } from 'boot/axios';

// Helpers
const route = useRoute();
const getVideoMetadataApi = inject(getVideoMetadataApiInjectionKey) as IGetVideoMetadataApi;
const dateService = inject(dateServiceInjectionKey) as IDateService;

// Variables
const videoMetadata: Ref<VideoMetadataDTO | null> = ref(null);
const videoStreamURL = computed(() =>  // The computed property returns the URL to streaming endpoint for the video.
  videoMetadata.value!.id
    ? streamApi.defaults.baseURL + '/video/stream/' + videoMetadata.value!.id
    : ''
);

/**
 * If the page gets loaded, the video metadata is requested from the server.
 */
onMounted(async () => {
  const videoId: string | null = route.query.id as string;
  if (!videoId)
    return;

  const response = await getVideoMetadataApi.get(videoId);
  if (!response)
    return;

  videoMetadata.value = response;
});
</script>
