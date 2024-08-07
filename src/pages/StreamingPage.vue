<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="row items-center justify-evenly" style="height: calc(80vh - var(--header-height))">
      <q-scroll-area style="width: 100%; height: 100%">
        <div class="q-mx-auto" style="width: 80%">
          <q-video
            :ratio="16/9"
            src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
          />

        </div>

        <div v-for="n in 100" :key="n" class="q-py-xs">
          Lorem ipsum dolor sit amet, consectetur adipisicing
          elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </div>
      </q-scroll-area>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
</script>
