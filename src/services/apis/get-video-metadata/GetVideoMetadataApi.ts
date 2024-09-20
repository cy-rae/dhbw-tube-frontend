import {useQuasar} from 'quasar';
import {useI18n} from 'vue-i18n';
import {AxiosResponse, HttpStatusCode} from 'axios';
import { streamApi } from 'boot/axios';
import {IGetVideoMetadataApi} from 'src/services/apis/get-video-metadata/IGetVideoMetadataApi';
import {VideoMetadataDTO} from 'src/dtos/VideoMetadataDTO';

export class GetVideoMetadataApi implements IGetVideoMetadataApi {
  private q = useQuasar();
  private i18n = useI18n();

  /**
   * Get the metadata of a video by its ID.
   * @param id The ID of the video to get the metadata of.
   */
  async get(id: string): Promise<VideoMetadataDTO | null> {
    // Make the request to the API
    const response: AxiosResponse = await streamApi.get('/video/' + id);

    // Check if the request was successful. If not, show an error message and return null.
    if (response.status != HttpStatusCode.Ok) {
      this.q.notify({
        type: 'negative',
        message: this.i18n.t('error-message.load-video') + response.status,
        position: 'top'
      });
      return null;
    }

    // Convert the response to a VideoMetadataDTO object and return it
    return this.convertToVideoMetadataDTO(response);
  }

  /**
   * Convert the response from the API to a VideoMetadataDTO object.
   * @param response The response from the API.
   * @private
   */
  private convertToVideoMetadataDTO(response: AxiosResponse) {
    const videoMetadata = new VideoMetadataDTO();
    videoMetadata.id = response.data['id'];
    videoMetadata.title = response.data['title'];
    videoMetadata.creator = response.data['creator'];
    videoMetadata.description = response.data['description'];
    videoMetadata.upload_date = new Date(response.data['upload_date']);

    return videoMetadata;
  }
}
