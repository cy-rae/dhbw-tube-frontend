import { IGetCoverApi } from 'src/services/apis/get-cover/IGetCoverApi';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import { AxiosResponse, HttpStatusCode } from 'axios';
import { api } from 'boot/axios';

export class GetCoverApi implements IGetCoverApi {
  private q = useQuasar();
  private i18n = useI18n();

  public async get(videoId: string): Promise<string | null> {
    const response: AxiosResponse = await api.get('/cover/' + videoId, {
      responseType: 'blob',
    });

    if (response.status != HttpStatusCode.Ok && !(response.data instanceof Blob)) {
      this.q.notify({
        type: 'negative',
        message: this.i18n.t('error-message.load-cover') + response.status,
        position: 'top',
      });
      return null;
    }

    return URL.createObjectURL(new Blob([response.data]));
  }
}
