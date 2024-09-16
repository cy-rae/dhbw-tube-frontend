<!--
This component realizes the error page that is displayed when a user tries to access a page that does not exist.
-->
<template>
  <div class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        {{ $t('not-found-page.message') }}
      </div>

      <q-btn
        to="/"
        :label="$t('not-found-page.back-to-homepage')"
        class="q-mt-xl" text-color="primary" color="white" unelevated no-caps
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ErrorNotFound'
});
</script>
