<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="row items-center justify-evenly" style="height: calc(80vh - var(--header-height))">
      <q-card-section class="page-title">
        {{ $t('search.title') }}
      </q-card-section>

      <q-card-section class="full-height full-width q-pa-none">
        <div class="row q-col-gutter-sm q-pb-md">
          <!-- TITLE -->
          <div class="col">
            <q-input
              v-model="videoFilterDTO.title"
              :placeholder="$t('search.filter.title')"
              :autofocus="false"
              standout maxlength="120"
            />
          </div>

          <!-- CREATOR -->
          <div class="col">
            <q-input
              v-model="videoFilterDTO.creator"
              :placeholder="$t('search.filter.creator')"
              :autofocus="false"
              standout maxlength="120"
            />
          </div>

          <!-- UPLOAD DATE -->
          <div class="col">
            <date-input
              v-model:date="upload_date"
              :rules="[]"
              :label="$t('search.filter.upload-date')"
            />
          </div>

          <!-- SORT BY -->
          <div class="col select-size">
            <q-select
              v-model="videoFilterDTO.sortBy"
              :options="sortByOptions"
              :option-label="getSortByLabel"
              :label="$t('search.filter.sort-by')"
              standout
            />
          </div>

          <!-- ORDER -->
          <div class="col select-size">
            <q-select
              v-model="videoFilterDTO.order"
              :options="orderOptions"
              :option-label="getOrderLabel"
              :label="$t('search.filter.order')"
              standout
            />
          </div>

          <!-- SEARCH BUTTON -->
          <div class="q-my-auto">
            <q-btn
              @click="search()"
              icon="search" color="primary" round class="q-pl-none" unelevated
            />
          </div>
        </div>

        <q-scroll-area style="width: 100%; height: calc(100% - var(--page-title-height))">
          <div v-if="searchResult.videos.length <= 0" class="row justify-center items-center full-height text-h6">
            {{ $t('search.no-videos') }}
          </div>

          <div v-else>
            <div v-for="videoListingElement in searchResult.videos" :key="videoListingElement.id">
              <video-listing-card :video-listing-element="videoListingElement"/>

              <div v-if="videoListingElement !== searchResult.videos[searchResult.videos.length - 1]" class="q-pb-md"/>
            </div>
          </div>
        </q-scroll-area>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import {computed, inject, onMounted, Ref, ref} from 'vue';
import {QInput} from 'quasar';
import {useI18n} from 'vue-i18n';
import {dateServiceInjectionKey, searchVideosApiInjectionKey} from 'src/injection-keys';
import {ISearchVideosApi} from 'src/services/apis/search-videos/ISearchVideosApi';
import VideoListingCard from 'components/cards/VideoListingCard.vue';
import {VideoFilterDTO} from 'src/dtos/VideoFilterDTO';
import {SearchResult} from 'src/dtos/SearchResult';
import DateInput from 'components/inputs/DateInput.vue';
import {IDateService} from 'src/services/date-service/IDateService';
import {Order} from 'src/enums/Order';
import {SortByProps} from 'src/enums/SortByProps';

// Helpers
const i18n = useI18n();
const searchVideosApi = inject(searchVideosApiInjectionKey) as ISearchVideosApi;
const dateService = inject(dateServiceInjectionKey) as IDateService;

// Variables
const searchResult: Ref<SearchResult> = ref(new SearchResult());
const videoFilterDTO = ref(new VideoFilterDTO());
const upload_date = ref('');
const sortByOptions = computed(() => [
  SortByProps.TITLE,
  SortByProps.CREATOR,
  SortByProps.UPLOAD_DATE
]);
const orderOptions = computed(() => [
  Order.ASC,
  Order.DESC
]);

onMounted(async () => {
  await search();
});

function getSortByLabel(value: SortByProps) {
  switch (value) {
    case SortByProps.TITLE:
      return i18n.t('search.filter.title');
    case SortByProps.CREATOR:
      return i18n.t('search.filter.creator');
    case SortByProps.UPLOAD_DATE:
      return i18n.t('search.filter.upload-date');
    default:
      return '';
  }
}

function getOrderLabel(value: Order) {
  switch (value) {
    case Order.ASC:
      return i18n.t('search.filter.order.asc');
    case Order.DESC:
      return i18n.t('search.filter.order.desc');
    default:
      return '';
  }
}

async function search() {
  const dateVal = dateService.stringToDate(upload_date.value, dateService.DATE_SHORT_FORMAT());
  videoFilterDTO.value.upload_date = dateService.formatDate(dateVal, dateService.DATE_BACKEND_FORMAT);

  const response: SearchResult | null = await searchVideosApi.get(videoFilterDTO.value);
  if (response) {
    searchResult.value = response;
    console.log(searchResult.value);
  }
}
</script>

<style scoped>
.select-size {
  max-width: 200px;
}
</style>
