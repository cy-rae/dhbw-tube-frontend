import { VideoFilterDTO } from 'src/dtos/VideoFilterDTO';
import {SearchResultDTO} from 'src/dtos/SearchResultDTO';

export interface ISearchVideosApi {
  get(filter: VideoFilterDTO): Promise<SearchResultDTO | null>;
}
