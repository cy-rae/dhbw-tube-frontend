import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import { AxiosResponse, HttpStatusCode } from 'axios';
import { api } from 'src/boot/axios';
import { VideoDTO } from 'src/dtos/VideoDTO';
import { IStreamVideoApi } from 'src/services/apis/stream-video/IStreamVideoApi';
import { StreamVideoDTO } from 'src/dtos/StreamVideoDTO';

export class StreamVideoApi implements IStreamVideoApi {
  private q = useQuasar();
  private i18n = useI18n();

  async get(id: number): Promise<StreamVideoDTO | null> {
    const response: AxiosResponse = await api.get('/video/stream/' + id);

    if (response.status != HttpStatusCode.Ok) {
      this.q.notify({
        type: 'negative',
        message: this.i18n.t('error-message.stream-video') + response.status,
        position: 'top'
      });
      return null;
    }

    return JSON.parse(response.data) as VideoDTO;
  }
}
