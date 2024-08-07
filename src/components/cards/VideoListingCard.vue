<template>
  <q-card class="video-listing-card">
    <q-card-section horizontal class="q-pa-none">
      <q-card-section class="row justify-evenly items-center q-pa-none" style="width: 250px">
        <img
          :src="props.videoListing.coverBase64"
          :alt="$t('search.cover-alt')"
          class="q-px-auto"
          style="height: 150px"
        />
      </q-card-section>

      <q-separator vertical />

      <q-card-section class="q-pa-none">
        {{ props.videoListing.title }}
        {{ props.videoListing.username }}
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { VideoListingDTO } from 'src/dtos/VideoListingDTO';

interface Props {
  videoListing: VideoListingDTO;
}

const props = defineProps<Props>();

</script>

<style>
.video-listing-card {
  padding: 0;
}
</style>
