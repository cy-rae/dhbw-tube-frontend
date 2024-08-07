<template>
  <q-page class="row items-center justify-evenly">
    <q-card>
      <q-card-section class="q-pa-none q-pb-md text-h5">
        {{ $t('upload.title') }}
      </q-card-section>

      <q-card-section class="q-pa-none">
        <q-form ref="uploadFormRef" class="q-gutter-md">
          <div class="row q-col-gutter-md">
            <div class="col">
              <q-input
                v-model="title"
                :placeholder="$t('upload.placeholder.title')"
                required standout
              />
            </div>

            <div class="col">
              <q-file
                v-model="file"
                :label="$t('upload.placeholder.file')"
                standout
              >
                <template v-slot:prepend>
                  <q-icon name="attach_file" />
                </template>
              </q-file>
            </div>
          </div>

          <div class="row q-col-gutter-md q-pt-md">
            <div class="col-3" />
            <div class="col-6">
              <q-input
                v-model="username"
                :placeholder="$t('upload.placeholder.username')"
                required standout
              />
            </div>
            <div class="col-3" />
          </div>

        </q-form>
      </q-card-section>

      <q-separator class="q-my-md" />

      <q-card-actions align="center" class="q-pa-none">
        <q-btn
          :label="$t('upload.label.reset')"
          @click="onReset"
          color="grey-5" no-caps text-color="black" unelevated
        />

        <q-btn
          :label="$t('upload.label.upload')"
          @click="onUpload"
          color="primary" no-caps unelevated
        />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import { UploadDTO } from 'src/dtos/UploadDTO';
import { QForm } from 'quasar';

const uploadFormRef: Ref<InstanceType<typeof QForm> | null> = ref(null);
const title = ref('');
const file: Ref<File | null | undefined> = ref(null);
const username = ref('');

function onReset(): void {
  title.value = '';
  file.value = null;
  username.value = '';
}

function onUpload(): void {
  if(!uploadFormRef.value?.validate() || !file.value){
    return
  }

  const uploadDTO = new UploadDTO(title.value, file.value, username.value);
  console.log(uploadDTO); // TODO: Send to API
}
</script>
