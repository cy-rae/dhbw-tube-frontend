import { VideoFilterDTO } from 'src/dtos/VideoFilterDTO';
import { VideoListingDTO } from 'src/dtos/VideoListingDTO';

export interface ISearchVideosApi {
  post(filter: VideoFilterDTO): Promise<VideoListingDTO[] | null>;
}
