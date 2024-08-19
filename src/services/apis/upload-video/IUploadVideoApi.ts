import { UploadVideoDTO } from 'src/dtos/UploadVideoDTO';

export interface IUploadVideoApi {
  post(payload: UploadVideoDTO): Promise<void>;
}
