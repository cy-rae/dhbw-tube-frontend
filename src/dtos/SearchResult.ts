import {VideoListingElementDTO} from 'src/dtos/VideoListingElementDTO';

export class SearchResult{
  videos: VideoListingElementDTO[];
  total: number;
  pages: number;
  currentPage: number;
  perPage: number;

  constructor() {
    this.videos = [];
    this.total = 0;
    this.pages = 1;
    this.currentPage = 1;
    this.perPage = 10;
  }
}
