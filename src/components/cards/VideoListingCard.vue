<template>
  <q-card
    @click="onVideoListing"
    v-ripple
    class="video-listing-card full-width cursor-pointer q-hoverable"
  >
    <q-card-section horizontal class="q-pa-none q-pl-md">
      <q-card-section class="row justify-evenly items-center q-pa-none" style="width: 250px">
        <img
          :src="coverStreamURL"
          :alt="$t('search.cover-alt')"
          class="q-px-auto curved-border"
          style="max-height: 150px; max-width: 250px"
        />
      </q-card-section>

      <q-separator vertical/>

      <q-card-section class="q-pa-none q-my-auto q-pl-md">
        <div class="row text-h5">{{ props.videoListingElement.title }}</div>
        <div class="row text-h6">{{ $t('stream.by') }} {{ props.videoListingElement.creator }}</div>
        <div class="row">{{ $t('stream.upload-date') }}:
          {{ dateService.getFormattedDate(videoListingElement.upload_date) }}
        </div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router';
import {RoutePaths} from 'src/enums/RoutePaths';
import {dateServiceInjectionKey} from 'src/injection-keys';
import {computed, inject} from 'vue';
import {VideoListingElementDTO} from 'src/dtos/VideoListingElementDTO';
import {IDateService} from 'src/services/date-service/IDateService';
import {Urls} from 'src/enums/Urls';

// Helpers
const router = useRouter();
const dateService = inject(dateServiceInjectionKey) as IDateService;

// Properties
interface Props {
  videoListingElement: VideoListingElementDTO
}

const props = defineProps<Props>();

// Variables
const coverStreamURL = computed(() =>
  props.videoListingElement.id
    ? Urls.STREAM + '/cover/' + props.videoListingElement.id
    : ''
);

function onVideoListing() {
  router.push({path: RoutePaths.STREAMING_PAGE, query: {id: props.videoListingElement.id}});
}
</script>

<style>
.video-listing-card {
  padding: 0;
}
</style>
