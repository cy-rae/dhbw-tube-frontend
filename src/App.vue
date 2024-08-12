<template>
  <router-view />
</template>

<script setup lang="ts">
import { UploadVideoApi } from 'src/services/apis/upload-video/UploadVideoApi';
import { FilterVideosApi } from 'src/services/apis/filter-videos/FilterVideosApi';
import { provide } from 'vue';
import {
  filterVideosApiInjectionKey,
  getVideoApiInjectionKey,
  getVideosApiInjectionKey, streamVideoApiInjectionKey,
  uploadVideoApiInjectionKey
} from 'src/injection-keys';
import { GetVideoApi } from 'src/services/apis/get-video/GetVideoApi';
import { GetVideosApi } from 'src/services/apis/get-videos/GetVideosApi';
import { StreamVideoApi } from 'src/services/apis/stream-video/StreamVideoApi';

defineOptions({
  name: 'App'
});

// Provide dependencies
provide(uploadVideoApiInjectionKey, new UploadVideoApi());
provide(getVideoApiInjectionKey, new GetVideoApi());
provide(streamVideoApiInjectionKey, new StreamVideoApi());

provide(filterVideosApiInjectionKey, new FilterVideosApi());
provide(getVideosApiInjectionKey, new GetVideosApi());
</script>
