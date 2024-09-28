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
    // Show a loading message
    this.q.loading.show({
        message: this.i18n.t('upload.uploading-video'),
        delay: 400
      }
    );

    // Create a new FormData object and append the data to it
    const formData = new FormData();
    formData.append('title', uploadVideoDTO.title);
    formData.append('creator', uploadVideoDTO.creator);
    formData.append('description', uploadVideoDTO.description);
    formData.append('video', uploadVideoDTO.video!);
    formData.append('cover', uploadVideoDTO.cover!);
    const totalSize = uploadVideoDTO.getSize();

    try {
      // Send the request to the server
      const response: AxiosResponse = await uploadApi.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },

        // Callback function to track the upload progress
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          // Calculate the upload progress in percentage
          this.uploadProgress = Math.round(progressEvent.loaded * 100 / totalSize);

          if(this.uploadProgress < 100) {
            // Show the upload progress
            this.q.loading.show({
              message: this.i18n.t('upload.uploading-video') + ' ' + this.uploadProgress + '%',
              html: true
            });
          } else {
            // Show that the video is being stored
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

    // Reset the upload progress and hide the loading message
    setTimeout(() => {
      this.q.loading.hide();
    }, 500);
  }
}
