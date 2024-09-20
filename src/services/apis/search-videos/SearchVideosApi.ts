import { AxiosResponse, HttpStatusCode } from 'axios';
import { VideoFilterDTO } from 'src/dtos/VideoFilterDTO';
import { ISearchVideosApi } from 'src/services/apis/search-videos/ISearchVideosApi';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import { streamApi } from 'boot/axios';
import { SearchResultDTO } from 'src/dtos/SearchResultDTO';
import {VideoListingElementDTO} from 'src/dtos/VideoListingElementDTO';

export class SearchVideosApi implements ISearchVideosApi {
  private q = useQuasar();
  private i18n = useI18n();

  /**
   * Search for videos based on the filter.
   * @param filter The filter to apply to the search.
   */
  async get(filter: VideoFilterDTO): Promise<SearchResultDTO | null> {
    // Make the request to the API
    const response: AxiosResponse = await streamApi.get('/videos/search', {
      params: filter,
    });

    // Check if the request was successful. If not, show an error message and return null.
    if (response.status != HttpStatusCode.Ok) {
      this.q.notify({
        type: 'negative',
        message: this.i18n.t('error-message.search-videos') + response.status,
        position: 'top',
      });
      return null;
    }

    // Convert the response to a SearchResult object and return it
    return this.convertToSearchResult(response);
  }

  /**
   * Convert the response from the API to a SearchResult object.
   * @param response The response from the API.
   * @private
   */
  private convertToSearchResult(response: AxiosResponse): SearchResultDTO {
    const searchResult = new SearchResultDTO();
    searchResult.total = response.data['total'];
    searchResult.pages = response.data['pages'];
    searchResult.currentPage = response.data['current_page'];
    searchResult.perPage = response.data['per_page'];
    searchResult.videos = this.convertToVideoListing(response);

    return searchResult;
  }

  /**
   * Convert the nested response objects from the API to a list of VideoListingElementDTO objects.
   * @param response The response from the API.
   * @private
   */
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
