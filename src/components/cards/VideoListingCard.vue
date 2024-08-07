<template>
  <q-card
    @click="onVideoListing"
    v-ripple
    class="video-listing-card full-width cursor-pointer q-hoverable"
  >
    <q-card-section horizontal class="q-pa-none q-pl-md">
      <q-card-section class="row justify-evenly items-center q-pa-none" style="width: 250px">
        <img
          :src="props.videoListing.coverBase64"
          :alt="$t('search.cover-alt')"
          class="q-px-auto curved-border"
          style="max-height: 150px; max-width: 250px"
        />
      </q-card-section>

      <q-separator vertical />

      <q-card-section class="q-pa-none q-my-auto q-pl-md">
        <div class="row text-h5">{{ props.videoListing.title }}</div>
        <div class="row text-h6">{{ props.videoListing.username }}</div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { VideoListingDTO } from 'src/dtos/VideoListingDTO';
import { useRouter } from 'vue-router';
import { RoutePaths } from 'src/enums/RoutePaths';

// Helpers
const router = useRouter();

// Properties
interface Props {
  videoListing: VideoListingDTO;
}

const props = defineProps<Props>();

function onVideoListing() {
  router.push(RoutePaths.STREAMING_PAGE);
}
</script>

<style>
.video-listing-card {
  padding: 0;
}
</style>
