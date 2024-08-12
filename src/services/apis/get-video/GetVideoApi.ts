import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import axios, { AxiosResponse, HttpStatusCode } from 'axios';
import { IGetVideoApi } from 'src/services/apis/get-video/IGetVideoApi';
import { VideoDTO } from 'src/dtos/VideoDTO';

export class GetVideoApi implements IGetVideoApi {
  private q = useQuasar();
  private i18n = useI18n();

  async get(id: number): Promise<VideoDTO | null> {
    const response: AxiosResponse = await axios.get('/video/' + id);

    if (response.status != HttpStatusCode.Ok) {
      this.q.notify({
        type: 'negative',
        message: this.i18n.t('error-message.load-video') + response.status
      });
      return null;
    }

    return JSON.parse(response.data) as VideoDTO;
  }
}
