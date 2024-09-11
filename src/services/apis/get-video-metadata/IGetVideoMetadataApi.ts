import {VideoMetadataDTO} from 'src/dtos/VideoMetadataDTO';

export interface IGetVideoMetadataApi {
  get(id: string): Promise<VideoMetadataDTO | null>;
}
