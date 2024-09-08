import {VideoMetadataDTO} from 'src/dtos/VideoMetadataDTO';

export class SearchResult{
  videos: VideoMetadataDTO[];
  total: number;
  pages: number;
  current_page: number;
  per_page: number;

  constructor() {
    this.videos = [];
    this.total = 0;
    this.pages = 1;
    this.current_page = 1;
    this.per_page = 10;
  }
}
