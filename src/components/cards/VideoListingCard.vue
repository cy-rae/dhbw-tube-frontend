<template>
  <q-card
    @click="onVideoListing"
    v-ripple
    class="video-listing-card full-width cursor-pointer q-hoverable"
  >
    <q-card-section horizontal class="q-pa-none q-pl-md">
      <q-card-section class="row justify-evenly items-center q-pa-none" style="width: 250px">
        <img
          :src="cover"
          :alt="$t('search.cover-alt')"
          class="q-px-auto curved-border"
          style="max-height: 150px; max-width: 250px"
        />
      </q-card-section>

      <q-separator vertical />

      <q-card-section class="q-pa-none q-my-auto q-pl-md">
        <div class="row text-h5">{{ props.videoMetadata.title }}</div>
        <div class="row text-h6">{{ props.videoMetadata.creator }}</div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { VideoMetadataDTO } from 'src/dtos/VideoMetadataDTO';
import { useRouter } from 'vue-router';
import { RoutePaths } from 'src/enums/RoutePaths';
import {getCoverApiInjectionKey} from 'src/injection-keys';
import {inject, onMounted, ref} from 'vue';
import {IGetCoverApi} from 'src/services/apis/get-cover/IGetCoverApi';
import {useI18n} from 'vue-i18n';

// Helpers
const getCoverApi: IGetCoverApi | undefined = inject(getCoverApiInjectionKey);
const router = useRouter();
const i18n = useI18n();

// Variables
let cover = ref<string>('');

// Properties
interface Props {
  videoMetadata: VideoMetadataDTO;
}

const props = defineProps<Props>();

onMounted(async () => {
  await loadCover();
});

function onVideoListing() {
  router.push(RoutePaths.STREAMING_PAGE);
}

async function loadCover(): Promise<void> {
  const response: Blob | null = await getCoverApi!.get(props.videoMetadata.id);
  if (response) {
    cover.value = await blobToBase64(response);
  }
}

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        resolve(reader.result.toString());
      } else {
        reject(new Error(i18n.t('error-messages.blob-to-base64')));
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
</script>

<style>
.video-listing-card {
  padding: 0;
}
</style>
