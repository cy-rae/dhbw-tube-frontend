<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="row items-center justify-evenly">
      <q-scroll-area style="width: 100%; height: calc(100% - var(--card-actions-height))">
        <q-form class="q-gutter-md">
          <q-input
            v-model="title"
            :placeholder="$t('upload.placeholder.title')"
            required standout
          />

          <q-input
            v-model="username"
            :placeholder="$t('upload.placeholder.username')"
            required standout
          />

          <q-file
            v-model="file"
            :label="$t('upload.placeholder.file')"
            standout
          >
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
        </q-form>
      </q-scroll-area>

      <q-card-actions>
        <q-btn
          :label="$t('upload.label.reset')"
          color="grey-5" no-caps text-color="black" unelevated
        />

        <q-btn
          :label="$t('upload.label.upload')"
          color="primary" no-caps unelevated
        />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';

const title = ref('');
const username = ref('');
const file: Ref<File | null | undefined> = ref(null);
</script>
