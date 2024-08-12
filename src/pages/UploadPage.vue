<template>
  <q-page class="row items-center justify-evenly">
    <q-card>
      <q-card-section class="q-pa-none q-pb-md text-h5">
        {{ $t('upload.title') }}
      </q-card-section>

      <q-card-section class="q-pa-none">
        <q-form class="q-gutter-md">
          <div class="row q-col-gutter-md">
            <!-- TITLE -->
            <div class="col">
              <q-input
                ref="titleRef"
                v-model="title"
                :placeholder="$t('upload.placeholder.title')"
                :rules="[() => ruleService.isSet(title)]"
                required standout
                autofocus
              />
            </div>

            <!-- USERNAME -->
            <div class="col">
              <q-input
                ref="usernameRef"
                v-model="username"
                :placeholder="$t('upload.placeholder.username')"
                :rules="[() => ruleService.isSet(username)]"
                required standout
                autofocus
              />
            </div>
          </div>

          <div class="row q-col-gutter-md q-pt-md">
            <!-- VIDEO -->
            <div class="col">
              <q-file
                ref="videoRef"
                v-model="video"
                :label="$t('upload.placeholder.video')"
                :rules="[() => ruleService.isSet(video)]"
                standout accept=""
              >
                <template v-slot:prepend>
                  <q-icon name="attach_file" />
                </template>
              </q-file>
            </div>

            <!-- COVER -->
            <div class="col">
              <q-file
                ref="coverRef"
                v-model="cover"
                :label="$t('upload.placeholder.cover')"
                :rules="[() => ruleService.isSet(cover)]"
                standout accept=""
              >
                <template v-slot:prepend>
                  <q-icon name="attach_file" />
                </template>
              </q-file>
            </div>
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
import { QFile, QForm, QInput } from 'quasar';
import { inject, Ref, ref } from 'vue';
import { RuleService } from 'src/services/RuleService';
import { UploadDTO } from 'src/dtos/UploadDTO';
import { uploadVideoApiInjectionKey } from 'src/injection-keys';
import { IUploadVideoApi } from 'src/services/apis/upload-video/IUploadVideoApi';

// Helpers
const uploadApi: IUploadVideoApi | undefined = inject(uploadVideoApiInjectionKey);
const ruleService = new RuleService();

// References
const titleRef: Ref<InstanceType<typeof QInput> | null> = ref(null);
const usernameRef: Ref<InstanceType<typeof QInput> | null> = ref(null);
const videoRef: Ref<InstanceType<typeof QFile> | null> = ref(null);
const coverRef: Ref<InstanceType<typeof QFile> | null> = ref(null);

// Models
const title = ref('');
const username = ref('');
const video: Ref<File | null | undefined> = ref(null);
const cover: Ref<File | null | undefined> = ref(null);


function onReset(): void {
  title.value = '';
  username.value = '';
  video.value = null;
  cover.value = null;
}

async function onUpload(): Promise<void> {
  const isTitleValid = titleRef.value?.validate();
  const isUsernameValid = usernameRef.value?.validate();
  const isVideoValid = videoRef.value?.validate();
  const isCoverValid = coverRef.value?.validate();

  if (!isTitleValid || !isUsernameValid || !isVideoValid || !isCoverValid || !video.value || !cover.value) {
    return;
  }

  const uploadDTO = new UploadDTO(title.value, username.value, video.value, cover.value);
  await uploadApi!.post(uploadDTO);
}
</script>
