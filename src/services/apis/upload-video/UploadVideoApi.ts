import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import { AxiosProgressEvent, AxiosResponse, HttpStatusCode } from 'axios';
import { uploadApi } from 'src/boot/axios';
import { UploadVideoDTO } from 'src/dtos/UploadVideoDTO';
import { IUploadVideoApi } from 'src/services/apis/upload-video/IUploadVideoApi';

export class UploadVideoApi implements IUploadVideoApi {
  private q = useQuasar();
  private i18n = useI18n();
  private uploadProgress = 0;

  async post(uploadVideoDTO: UploadVideoDTO): Promise<void> {
    const formData = new FormData();
    formData.append('title', uploadVideoDTO.title);
    formData.append('creator', uploadVideoDTO.creator);
    formData.append('description', uploadVideoDTO.description);
    formData.append('video', uploadVideoDTO.video!);
    formData.append('cover', uploadVideoDTO.cover!);

    try {
      const response: AxiosResponse = await uploadApi.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          this.uploadProgress = Math.round((progressEvent.loaded * 100) / progressEvent.total!);

          if(this.uploadProgress < 100) {
            // Update the loading message
            this.q.loading.show({
              message: this.i18n.t('upload.uploading-video') + ' ' + this.uploadProgress + '%',
              html: true
            });
          } else {
            // Hide the loading message
            this.q.loading.show(
              {
                message: this.i18n.t('upload.storing-video'),
                html: true
              }
            );
          }
        }
      });

      // Show a message depending on the response status
      if (response.status == HttpStatusCode.Created) {
        this.q.notify({
          type: 'positive',
          message: this.i18n.t('message.upload-video'),
          position: 'top'
        });
      } else {
        this.q.notify({
          type: 'negative',
          message: this.i18n.t('error-message.upload-video-video') + response.status,
          position: 'top'
        });
      }
    } catch (error) {
      // If an error occurred, show a message
      this.q.notify({
        type: 'negative',
        message: this.i18n.t('error-message.upload-video-without-error-code'),
        position: 'top'
      });
    }

    this.uploadProgress = 0;
    this.q.loading.hide();
  }
}
