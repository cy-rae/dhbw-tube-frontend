import { AxiosResponse, HttpStatusCode } from 'axios';
import { VideoListingDTO } from 'src/dtos/VideoListingDTO';
import { VideoFilterDTO } from 'src/dtos/VideoFilterDTO';
import { ISearchVideosApi } from 'src/services/apis/search-videos/ISearchVideosApi';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import { api } from 'boot/axios';

export class SearchVideosApi implements ISearchVideosApi {
  private q = useQuasar();
  private i18n = useI18n();

  async post(filter: VideoFilterDTO): Promise<VideoListingDTO[] | null> {

    const response: AxiosResponse = await api.post('/videos', filter);

    if (response.status != HttpStatusCode.Ok) {
      this.q.notify({
        type: 'negative',
        message: this.i18n.t('error-message.search-videos') + response.status,
        position: 'top'
      });
      return null;
    }

    return JSON.parse(response.data) as VideoListingDTO[];
  }
}