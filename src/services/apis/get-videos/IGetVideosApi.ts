import { VideoListingDTO } from 'src/dtos/VideoListingDTO';

export interface IGetVideosApi{
  get(): Promise<VideoListingDTO[] | null>;
}
