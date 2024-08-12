import { VideoDTO } from 'src/dtos/VideoDTO';

export interface IGetVideoApi {
  get(id: number): Promise<VideoDTO | null>;
}
