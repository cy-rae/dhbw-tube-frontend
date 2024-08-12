import { UploadDTO } from 'src/dtos/UploadDTO';

export interface IUploadVideoApi {
  post(payload: UploadDTO): Promise<void>;
}
