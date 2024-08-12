import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import axios, { AxiosResponse, HttpStatusCode } from 'axios';
import { UploadDTO } from 'src/dtos/UploadDTO';
import { IUploadVideoApi } from 'src/services/apis/upload-video/IUploadVideoApi';

export class UploadVideoApi implements IUploadVideoApi {
  private q = useQuasar();
  private i18n = useI18n();

  async post(payload: UploadDTO): Promise<void> {
    const response: AxiosResponse = await axios.post('/video/upload', payload);
    if (response.status == HttpStatusCode.Ok) {
      this.q.notify({
        type: 'positive',
        message: this.i18n.t('message.upload-video-video') + response.status
      });
    } else {
      this.q.notify({
        type: 'negative',
        message: this.i18n.t('error-message.upload-video-video')
      });
    }
  }
}
