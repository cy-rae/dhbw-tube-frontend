import { VideoFilterDTO } from 'src/dtos/VideoFilterDTO';
import {SearchResult} from 'src/dtos/SearchResult';

export interface ISearchVideosApi {
  post(filter: VideoFilterDTO): Promise<SearchResult | null>;
}
