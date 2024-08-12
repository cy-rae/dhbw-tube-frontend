import { StreamVideoDTO } from 'src/dtos/StreamVideoDTO';

export interface IStreamVideoApi {
  get(id: number): Promise<StreamVideoDTO | null>;
}
