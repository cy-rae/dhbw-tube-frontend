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
                v-model="uploadVideoDTO.title"
                :placeholder="$t('upload.placeholder.title')"
                :rules="[() => ruleService.isSet(uploadVideoDTO.title)]"
                :autofocus="false"
                required standout
              />
            </div>

            <!-- USERNAME -->
            <div class="col">
              <q-input
                ref="usernameRef"
                v-model="uploadVideoDTO.creator"
                :placeholder="$t('upload.placeholder.username')"
                :rules="[() => ruleService.isSet(uploadVideoDTO.creator)]"
                :autofocus="false"
                required standout
              />
            </div>
          </div>

          <div class="row q-col-gutter-md q-pt-md">
            <!-- VIDEO -->
            <div class="col">
              <q-file
                ref="videoRef"
                v-model="uploadVideoDTO.video"
                :label="$t('upload.placeholder.video')"
                :rules="[() => ruleService.isSet(uploadVideoDTO.video)]"
                @rejected="onFileRejected"
                accept="video/*" max-file-size="10485760"
                standout clearable
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
                v-model="uploadVideoDTO.cover"
                :label="$t('upload.placeholder.cover')"
                :rules="[() => ruleService.isSet(uploadVideoDTO.cover)]"
                @rejected="onFileRejected"
                accept="image/*" max-file-size="2097152"
                standout clearable
              >
                <template v-slot:prepend>
                  <q-icon name="attach_file" />
                </template>
              </q-file>
            </div>
          </div>

          <!-- DESCRIPTION -->
          <div class="row q-col-gutter-md q-pt-md">
            <q-input
              v-model="uploadVideoDTO.description"
              :placeholder="$t('upload.placeholder.description')"
              :autofocus="false"
              standout type="textarea" class="full-width"
            />
          </div>
        </q-form>
      </q-card-section>

      <q-separator class="q-my-md" />

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
import { RuleService } from 'src/services/RuleService';
import { UploadVideoDTO } from 'src/dtos/UploadVideoDTO';
import { uploadVideoApiInjectionKey } from 'src/injection-keys';
import { IUploadVideoApi } from 'src/services/apis/upload-video/IUploadVideoApi';
import { useI18n } from 'vue-i18n';

// Helpers
const q = useQuasar();
const i18n = useI18n();
const uploadVideoApi: IUploadVideoApi | undefined = inject(uploadVideoApiInjectionKey);
const ruleService = new RuleService();

// References
const titleRef: Ref<InstanceType<typeof QInput> | null> = ref(null);
const usernameRef: Ref<InstanceType<typeof QInput> | null> = ref(null);
const videoRef: Ref<InstanceType<typeof QFile> | null> = ref(null);
const coverRef: Ref<InstanceType<typeof QFile> | null> = ref(null);

// Models
const uploadVideoDTO = reactive(new UploadVideoDTO());

async function onUpload(): Promise<void> {
  const isTitleValid = titleRef.value?.validate();
  const isUsernameValid = usernameRef.value?.validate();
  const isVideoValid = videoRef.value?.validate();
  const isCoverValid = coverRef.value?.validate();

  if (!isTitleValid || !isUsernameValid || !isVideoValid || !isCoverValid || !uploadVideoDTO.video || !uploadVideoDTO.cover) {
    return;
  }

  const uploadedSuccessfully = await uploadVideoApi!.post(uploadVideoDTO);
  if (uploadedSuccessfully)
    uploadVideoDTO.reset();
}

function onFileRejected(): void {
  q.notify({
    type: 'negative',
    message: i18n.t('error-message.file-size-exceeded'),
    position: 'top'
  });
}
</script>
