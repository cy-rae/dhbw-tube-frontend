<template>
  <router-view />
</template>

<script setup lang="ts">
import { UploadVideoApi } from 'src/services/apis/upload-video/UploadVideoApi';
import { SearchVideosApi } from 'src/services/apis/search-videos/SearchVideosApi';
import { provide } from 'vue';
import {
  uploadVideoApiInjectionKey,
  getCoverApiInjectionKey,
  getVideoMetadataApiInjectionKey,
  streamVideoApiInjectionKey,
  searchVideosApiInjectionKey,
  dateServiceInjectionKey
} from 'src/injection-keys';
import { GetVideoMetadataApi } from 'src/services/apis/get-video-metadata/GetVideoMetadataApi';
import { StreamVideoApi } from 'src/services/apis/stream-video/StreamVideoApi';
import {GetCoverApi} from 'src/services/apis/get-cover/GetCoverApi';
import {DateService} from 'src/services/date-service/DateService';

defineOptions({
  name: 'App'
});

// Provide upload API service
provide(uploadVideoApiInjectionKey, new UploadVideoApi());

// Provide stream API services
provide(getCoverApiInjectionKey, new GetCoverApi());
provide(getVideoMetadataApiInjectionKey, new GetVideoMetadataApi());
provide(streamVideoApiInjectionKey, new StreamVideoApi());
provide(searchVideosApiInjectionKey, new SearchVideosApi());

// Provide other services
provide(dateServiceInjectionKey, new DateService());
</script>
