import { IGetVideosApi } from 'src/services/apis/get-videos/IGetVideosApi';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import { VideoListingDTO } from 'src/dtos/VideoListingDTO';
import axios, { AxiosResponse, HttpStatusCode } from 'axios';

export class GetVideosApi implements IGetVideosApi {
  private q = useQuasar();
  private i18n = useI18n();

  async get(): Promise<VideoListingDTO[] | null> {
    const response: AxiosResponse = await axios.get('/videos');

    if (response.status != HttpStatusCode.Ok) {
      this.q.notify({
        type: 'negative',
        message: this.i18n.t('error-message.load-videos') + response.status
      });
      return null;
    }

    return JSON.parse(response.data) as VideoListingDTO[];
  }
}
