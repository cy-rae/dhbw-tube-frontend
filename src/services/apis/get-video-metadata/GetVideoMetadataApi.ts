import {useQuasar} from 'quasar';
import {useI18n} from 'vue-i18n';
import {AxiosResponse, HttpStatusCode} from 'axios';
import {api} from 'boot/axios';
import {IGetVideoMetadataApi} from 'src/services/apis/get-video-metadata/IGetVideoMetadataApi';
import {VideoMetadataDTO} from 'src/dtos/VideoMetadataDTO';
import { BaseUrls } from 'src/enums/BaseUrls';

export class GetVideoMetadataApi implements IGetVideoMetadataApi {
  private q = useQuasar();
  private i18n = useI18n();

  async get(id: string): Promise<VideoMetadataDTO | null> {
    const response: AxiosResponse = await api.get(BaseUrls.STREAM + '/video/' + id);

    if (response.status != HttpStatusCode.Ok) {
      this.q.notify({
        type: 'negative',
        message: this.i18n.t('error-message.load-video') + response.status,
        position: 'top'
      });
      return null;
    }

    return this.convertToVideoMetadataDTO(response);
  }

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
