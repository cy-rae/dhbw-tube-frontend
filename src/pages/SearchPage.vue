<!--
This component realizes the search page in which a user can search for videos. The search results are displayed in a list.
The user can filter the search results by title, creator and upload date and sort the results.
-->
<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="row items-center justify-evenly" style="height: calc(80vh - var(--header-height))">
      <q-card-section class="page-title">
        {{ $t('search.title') }}
      </q-card-section>

      <!-- FILTERS FROM -->
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
              v-model="videoFilterDTO.sort_by"
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

        <!-- SEARCH RESULTS -->
        <q-scroll-area
          style="width: 100%; height: calc(100% - var(--page-title-height) - var(--search-bar-height) - var(--search-pagination-height))">
          <div v-if="searchResult.videos.length <= 0" class="row justify-center items-center full-height text-h6">
            {{ $t('search.no-videos') }}
          </div>

          <div v-else>
            <div v-for="videoListingElement in searchResult.videos" :key="videoListingElement.id">
              <video-listing-card :video-listing-element="videoListingElement" />

              <div v-if="videoListingElement !== searchResult.videos[searchResult.videos.length - 1]" class="q-pb-md" />
            </div>
          </div>
        </q-scroll-area>

        <!-- PAGINATION -->
        <div class="row q-col-gutter-sm">
          <div class="col" />
          <div class="text-bold">
            <q-btn
              :disable="searchResult.currentPage == 1"
              @click="goToPage(searchResult.currentPage - 1)"
              icon="arrow_back" color="primary" round class="q-pl-none" unelevated size="sm" dense
            />

            {{ searchResult.currentPage }} / {{ searchResult.pages }}

            <q-btn
              :disable="searchResult.currentPage == searchResult.pages"
              @click="goToPage(searchResult.currentPage + 1)"
              icon="arrow_forward" color="primary" round class="q-pl-none" unelevated size="sm" dense
            />
          </div>
          <q-select
            v-model="videoFilterDTO.per_page"
            :options="perPageOptions"
            @update:model-value="goToPage(1)"
            standout dense class="q-my-auto"
          />
        </div>

      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, Ref, ref } from 'vue';
import { date, QInput } from 'quasar';
import { useI18n } from 'vue-i18n';
import { dateServiceInjectionKey, searchVideosApiInjectionKey } from 'src/injection-keys';
import { ISearchVideosApi } from 'src/services/apis/search-videos/ISearchVideosApi';
import VideoListingCard from 'components/cards/VideoListingCard.vue';
import { VideoFilterDTO } from 'src/dtos/VideoFilterDTO';
import { SearchResultDTO } from 'src/dtos/SearchResultDTO';
import DateInput from 'components/inputs/DateInput.vue';
import { IDateService } from 'src/services/date-service/IDateService';
import { Order } from 'src/enums/Order';
import { SortByProps } from 'src/enums/SortByProps';

// Helpers
const i18n = useI18n();
const searchVideosApi = inject(searchVideosApiInjectionKey) as ISearchVideosApi;
const dateService = inject(dateServiceInjectionKey) as IDateService;

// Variables
const searchResult: Ref<SearchResultDTO> = ref(new SearchResultDTO());
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
const perPageOptions = computed(() => [5, 10, 15, 20, 25, 30]);

onMounted(async () => {
  await search();
});

/**
 * Returns the label for the sort-by dropdown.
 * @param value The value of the sort-by dropdown.
 */
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

/**
 * Returns the label for the order dropdown.
 * @param value The value of the order dropdown.
 */
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

/**
 * Navigates to the given page of the result list.
 * @param page Index of the target page of the result list.
 */
async function goToPage(page: number) {
  videoFilterDTO.value.page = page;
  await search();
}

/**
 * Searches for videos based on the filter.
 */
async function search() {
  // Update the dates in the filter so that the server can filter by the upload date.
  updateDatesInFilter();

  // Get the search result from the server.
  const response: SearchResultDTO | null = await searchVideosApi.get(videoFilterDTO.value);
  if (response) {
    searchResult.value = response;
  }
}

/**
 * Updates the start and end date in the filter based on the selected date.
 */
function updateDatesInFilter() {
  const dateVal = dateService.stringToDate(upload_date.value, dateService.DATE_SHORT_FORMAT());
  if (dateVal) {
    const startOfDay = date.startOfDate(dateVal, 'day');
    videoFilterDTO.value.start_date = dateService.formatDate(startOfDay, 'YYYY-MM-DDTHH:mm:ss.sssZ');

    const endOfDay = date.endOfDate(dateVal, 'day');
    videoFilterDTO.value.end_date = dateService.formatDate(endOfDay, 'YYYY-MM-DDTHH:mm:ss.sssZ');
  } else {
    videoFilterDTO.value.start_date = '';
  }
}
</script>

<style scoped>
.select-size {
  max-width: 200px;
}
</style>
