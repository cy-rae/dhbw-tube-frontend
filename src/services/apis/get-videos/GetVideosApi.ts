import { IGetVideosApi } from 'src/services/apis/get-videos/IGetVideosApi';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import { VideoListingDTO } from 'src/dtos/VideoListingDTO';
import { AxiosResponse, HttpStatusCode } from 'axios';
import { api } from 'boot/axios';

export class GetVideosApi implements IGetVideosApi {
  private q = useQuasar();
  private i18n = useI18n();

  async get(): Promise<VideoListingDTO[] | null> {
    const response: AxiosResponse = await api.get('/videos');

    if (response.status != HttpStatusCode.Ok) {
      this.q.notify({
        type: 'negative',
        message: this.i18n.t('error-message.load-videos') + response.status,
        position: 'top'
      });
      return null;
    }

    return JSON.parse(response.data) as VideoListingDTO[];
  }
}
