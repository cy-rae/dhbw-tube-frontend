import { AxiosResponse, HttpStatusCode } from 'axios';
import { VideoFilterDTO } from 'src/dtos/VideoFilterDTO';
import { ISearchVideosApi } from 'src/services/apis/search-videos/ISearchVideosApi';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import { api } from 'boot/axios';
import { SearchResult } from 'src/dtos/SearchResult';
import {VideoMetadataDTO} from 'src/dtos/VideoMetadataDTO';

export class SearchVideosApi implements ISearchVideosApi {
  private q = useQuasar();
  private i18n = useI18n();

  async get(filter: VideoFilterDTO): Promise<SearchResult | null> {
    const response: AxiosResponse = await api.get('/videos/search', {
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
    searchResult.videos = this.convertVideoMetadata(response);

    return searchResult;
  }

  private convertVideoMetadata(response: AxiosResponse): VideoMetadataDTO[] {
    const videos: VideoMetadataDTO[] = [];
    for(const elem of response.data['videos']){
      const videoMetadata = new VideoMetadataDTO();
      videoMetadata.id = elem['id'];
      videoMetadata.title = elem['title'];
      videoMetadata.creator = elem['creator'];
      videoMetadata.description = elem['description'];
      videoMetadata.cover_filename = elem['cover_filename'];
      videoMetadata.video_filename = elem['video_filename'];
      videoMetadata.upload_date = new Date(elem['upload_date']);
      videos.push(videoMetadata);
    }

    return videos;
  }
}
