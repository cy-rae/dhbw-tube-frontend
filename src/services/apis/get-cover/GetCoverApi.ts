import {IGetCoverApi} from 'src/services/apis/get-cover/IGetCoverApi';
import {useQuasar} from 'quasar';
import {useI18n} from 'vue-i18n';
import {AxiosResponse, HttpStatusCode} from 'axios';
import {api} from 'boot/axios';

export class GetCoverApi implements IGetCoverApi {
  private q = useQuasar();
  private i18n = useI18n();

  public async get(videoId: string): Promise<Blob | null> {
    const response: AxiosResponse = await api.get('/video/cover/' + videoId);

    if (response.status != HttpStatusCode.Ok) {
      this.q.notify({
        type: 'negative',
        message: this.i18n.t('error-message.load-cover') + response.status,
        position: 'top'
      });
      return null;
    }

    return response.data;
  }
}
