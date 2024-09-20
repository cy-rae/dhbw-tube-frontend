<!--
This component realizes the upload page in which a user can upload a video with a cover, title, creator name and description.
-->
<template>
  <q-page class="row items-center justify-evenly">
    <q-card>
      <q-card-section class="q-pa-none q-pb-md text-h5">
        {{ $t('upload.title') }}
      </q-card-section>

      <!-- Upload Form -->
      <q-card-section class="q-pa-none">
        <q-form class="q-gutter-md">
          <div class="row q-col-gutter-md">
            <!-- Title -->
            <div class="col">
              <q-input
                ref="titleRef"
                v-model="uploadVideoDTO.title"
                :placeholder="$t('upload.placeholder.title')"
                :rules="[() => ruleService.isSet(uploadVideoDTO.title)]"
                :autofocus="false"
                required standout maxlength="120"
              />
            </div>

            <!-- Creator -->
            <div class="col">
              <q-input
                ref="creatorRef"
                v-model="uploadVideoDTO.creator"
                :placeholder="$t('upload.placeholder.creator')"
                :rules="[() => ruleService.isSet(uploadVideoDTO.creator)]"
                :autofocus="false"
                required standout maxlength="120"
              />
            </div>
          </div>

          <div class="row q-col-gutter-md q-pt-md">
            <!-- Video Upload (max. 4GB) -->
            <div class="col">
              <q-file
                ref="videoRef"
                v-model="uploadVideoDTO.video"
                :label="$t('upload.placeholder.video')"
                :rules="[() => ruleService.isSet(uploadVideoDTO.video)]"
                @rejected="onFileRejected"
                accept="video/*" max-file-size="4294967296"
                standout clearable
              >
                <template v-slot:prepend>
                  <q-icon name="attach_file" />
                </template>
              </q-file>
            </div>

            <!-- Cover Upload (max. 10MB) -->
            <div class="col">
              <q-file
                ref="coverRef"
                v-model="uploadVideoDTO.cover"
                :label="$t('upload.placeholder.cover')"
                :rules="[() => ruleService.isSet(uploadVideoDTO.cover)]"
                @rejected="onFileRejected"
                accept="image/*" max-file-size="10485760"
                standout clearable
              >
                <template v-slot:prepend>
                  <q-icon name="attach_file" />
                </template>
              </q-file>
            </div>
          </div>

          <!-- Description -->
          <div class="row q-col-gutter-md q-pt-md">
            <q-input
              v-model="uploadVideoDTO.description"
              :placeholder="$t('upload.placeholder.description')"
              :autofocus="false"
              standout type="textarea" class="full-width" maxlength="5000"
            />
          </div>
        </q-form>
      </q-card-section>

      <q-separator class="q-my-md" />

      <!-- Upload & Reset Buttons -->
      <q-card-actions align="center" class="q-pa-none">
        <q-btn
          :label="$t('upload.label.reset')"
          @click="uploadVideoDTO.reset()"
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
import { QFile, QForm, QInput, useQuasar } from 'quasar';
import { inject, reactive, Ref, ref } from 'vue';
import { UploadVideoDTO } from 'src/dtos/UploadVideoDTO';
import { ruleServiceInjectionKey, uploadVideoApiInjectionKey } from 'src/injection-keys';
import { IUploadVideoApi } from 'src/services/apis/upload-video/IUploadVideoApi';
import { useI18n } from 'vue-i18n';
import { IRuleService } from 'src/services/rule-service/IRuleService';

// Helpers
const q = useQuasar();
const i18n = useI18n();
const uploadVideoApi = inject(uploadVideoApiInjectionKey) as IUploadVideoApi;
const ruleService = inject(ruleServiceInjectionKey) as IRuleService;

// References
const titleRef: Ref<InstanceType<typeof QInput> | null> = ref(null);
const creatorRef: Ref<InstanceType<typeof QInput> | null> = ref(null);
const videoRef: Ref<InstanceType<typeof QFile> | null> = ref(null);
const coverRef: Ref<InstanceType<typeof QFile> | null> = ref(null);

// Models
const uploadVideoDTO = reactive(new UploadVideoDTO());

/**
 * Uploads the video to the server.
 */
async function onUpload(): Promise<void> {
  // Get the upload form values
  const isTitleValid = titleRef.value?.validate();
  const isUsernameValid = creatorRef.value?.validate();
  const isVideoValid = videoRef.value?.validate();
  const isCoverValid = coverRef.value?.validate();

  // Check if the form is valid
  if (!isTitleValid || !isUsernameValid || !isVideoValid || !isCoverValid || !uploadVideoDTO.video || !uploadVideoDTO.cover) {
    return;
  }

  // Upload the video
  await uploadVideoApi.post(uploadVideoDTO);
}

/**
 * Notifies the user that the file was rejected.
 */
function onFileRejected(): void {
  q.notify({
    type: 'negative',
    message: i18n.t('error-message.file-size-exceeded'),
    position: 'top'
  });
}
</script>
