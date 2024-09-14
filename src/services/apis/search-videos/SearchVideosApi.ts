import { AxiosResponse, HttpStatusCode } from 'axios';
import { VideoFilterDTO } from 'src/dtos/VideoFilterDTO';
import { ISearchVideosApi } from 'src/services/apis/search-videos/ISearchVideosApi';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import { streamApi } from 'boot/axios';
import { SearchResult } from 'src/dtos/SearchResult';
import {VideoListingElementDTO} from 'src/dtos/VideoListingElementDTO';

export class SearchVideosApi implements ISearchVideosApi {
  private q = useQuasar();
  private i18n = useI18n();

  async get(filter: VideoFilterDTO): Promise<SearchResult | null> {
    const response: AxiosResponse = await streamApi.get('/videos/search', {
      params: filter,
    });

    if (response.status != HttpStatusCode.Ok) {
      this.q.notify({
        type: 'negative',
        message: this.i18n.t('error-message.search-videos') + response.status,
        position: 'top',
      });
      return null;
    }

    return this.convertToSearchResult(response);
  }

  private convertToSearchResult(response: AxiosResponse): SearchResult {
    const searchResult = new SearchResult();
    searchResult.total = response.data['total'];
    searchResult.pages = response.data['pages'];
    searchResult.currentPage = response.data['current_page'];
    searchResult.perPage = response.data['per_page'];
    searchResult.videos = this.convertToVideoListing(response);

    return searchResult;
  }

  private convertToVideoListing(response: AxiosResponse): VideoListingElementDTO[] {
    const videos: VideoListingElementDTO[] = [];
    for(const elem of response.data['videos']){
      const videoListingElement = new VideoListingElementDTO();
      videoListingElement.id = elem['id'];
      videoListingElement.title = elem['title'];
      videoListingElement.creator = elem['creator'];
      videoListingElement.upload_date = new Date(elem['upload_date']);
      videos.push(videoListingElement);
    }

    return videos;
  }
}
