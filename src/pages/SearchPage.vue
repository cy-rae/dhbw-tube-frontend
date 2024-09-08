<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="row items-center justify-evenly" style="height: calc(80vh - var(--header-height))">
      <q-card-section class="page-title">
        {{ $t('search.title') }}
      </q-card-section>

      <q-card-section class="full-height full-width q-pa-none">
        <q-scroll-area style="width: 100%; height: calc(100% - var(--page-title-height))">
          <div v-if="searchResult.videos.length <= 0" class="row justify-center items-center full-height text-h6">
            {{ $t('search.no-videos') }}
          </div>

          <div v-else>
            <div v-for="videoMetadataDTO in searchResult.videos" :key="videoMetadataDTO.id">
              <video-listing-card :video-metadata="videoMetadataDTO"/>

              <div v-if="videoMetadataDTO !== searchResult.videos[searchResult.videos.length - 1]" class="q-pb-md"/>
            </div>
          </div>
        </q-scroll-area>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import {inject, onMounted, Ref, ref} from 'vue';
import VideoListingCard from 'components/cards/VideoListingCard.vue';
import {searchVideosApiInjectionKey} from 'src/injection-keys';
import {VideoFilterDTO} from 'src/dtos/VideoFilterDTO';
import {SearchResult} from 'src/dtos/SearchResult';

// Helpers
const searchVideosApi = inject(searchVideosApiInjectionKey);

// Variables
const searchResult: Ref<SearchResult> = ref(new SearchResult());
const videoFilterDTO = ref(new VideoFilterDTO());

onMounted(async () => {
  const response: SearchResult | null = await searchVideosApi!.get(videoFilterDTO.value);
  if (response) {
    searchResult.value = response;
  }
});
</script>
