import { VideoFilterDTO } from 'src/dtos/VideoFilterDTO';
import {SearchResult} from 'src/dtos/SearchResult';

export interface ISearchVideosApi {
  get(filter: VideoFilterDTO): Promise<SearchResult | null>;
}
