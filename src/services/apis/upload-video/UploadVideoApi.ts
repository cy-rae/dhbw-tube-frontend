import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import { AxiosResponse, HttpStatusCode } from 'axios';
import { api } from 'src/boot/axios';
import { UploadVideoDTO } from 'src/dtos/UploadVideoDTO';
import { IUploadVideoApi } from 'src/services/apis/upload-video/IUploadVideoApi';
import { BaseUrls } from 'src/enums/BaseUrls';

export class UploadVideoApi implements IUploadVideoApi {
  private q = useQuasar();
  private i18n = useI18n();

  async post(uploadVideoDTO: UploadVideoDTO): Promise<void> {
    const formData = new FormData();
    formData.append('title', uploadVideoDTO.title);
    formData.append('creator', uploadVideoDTO.creator);
    formData.append('description', uploadVideoDTO.description);
    formData.append('video', uploadVideoDTO.video!);
    formData.append('cover', uploadVideoDTO.cover!);

    const response: AxiosResponse = await api.post(BaseUrls.UPLOAD + '/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

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
  }
}
