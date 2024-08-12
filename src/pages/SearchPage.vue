<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="row items-center justify-evenly" style="height: calc(80vh - var(--header-height))">
      <q-card-section class="page-title">
        {{ $t('search.title') }}
      </q-card-section>

      <q-card-section class="full-height full-width q-pa-none">
        <q-scroll-area style="width: 100%; height: calc(100% - var(--page-title-height))">
          <div v-for="videoListing in videoListings" :key="videoListing.coverBase64">
            <video-listing-card :video-listing="videoListing" />

            <div v-if="videoListing !== videoListings[videoListings.length - 1]" class="q-pb-md" />
          </div>
        </q-scroll-area>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
import { VideoListingDTO } from 'src/dtos/VideoListingDTO';
import VideoListingCard from 'components/cards/VideoListingCard.vue';

// Models
const videoListings: Ref<VideoListingDTO[]> = ref([]);

onMounted(async () => {
  // TODO: Load video listings
  // videoListings.value = await FilterVideosApi.execute(new VideoFilterDTO());

  videoListings.value = [
    {
      title: 'Cool coala can carate',
      username: 'coala-carism',
      coverBase64: 'https://th.bing.com/th/id/R.fe2f5fb4c15890fcc0efa18df90f6da7?rik=W9s%2bOhAuF3TwVw&pid=ImgRaw&r=0'
    },
    {
      title: 'Purple penguin picture',
      username: 'purple-penguin',
      coverBase64: 'https://www.publicdomainpictures.net/pictures/180000/velka/penquins-2.jpg'
    },
    {
      title: 'Deep desert',
      username: 'desert-dominic',
      coverBase64: 'https://i.pinimg.com/originals/8c/73/a4/8c73a4ee96fdceb760f1366e48a51f0e.jpg'
    },
    {
      title: 'Super spritzige Sprite',
      username: 'sprite-spritzer',
      coverBase64: 'https://th.bing.com/th/id/OIP.QJaHopKW-QzdE_PvAJuV8gHaER?rs=1&pid=ImgDetMain'
    }
  ];
});
</script>
