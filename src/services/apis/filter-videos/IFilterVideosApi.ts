import { VideoFilterDTO } from 'src/dtos/VideoFilterDTO';
import { VideoListingDTO } from 'src/dtos/VideoListingDTO';

export interface IFilterVideosApi {
  post(filter: VideoFilterDTO): Promise<VideoListingDTO[] | null>;
}
