<template>
  <router-view />
</template>

<script setup lang="ts">
import { UploadVideoApi } from 'src/services/apis/upload-video/UploadVideoApi';
import { SearchVideosApi } from 'src/services/apis/search-videos/SearchVideosApi';
import { provide } from 'vue';
import {
  searchVideosApiInjectionKey,
  getVideoApiInjectionKey,
  streamVideoApiInjectionKey,
  uploadVideoApiInjectionKey
} from 'src/injection-keys';
import { GetVideoApi } from 'src/services/apis/get-video/GetVideoApi';
import { StreamVideoApi } from 'src/services/apis/stream-video/StreamVideoApi';

defineOptions({
  name: 'App'
});

// Provide dependencies
provide(uploadVideoApiInjectionKey, new UploadVideoApi());
provide(getVideoApiInjectionKey, new GetVideoApi());
provide(streamVideoApiInjectionKey, new StreamVideoApi());
provide(searchVideosApiInjectionKey, new SearchVideosApi());
</script>
