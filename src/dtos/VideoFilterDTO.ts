import {SortByProps} from 'src/enums/SortByProps';
import {Order} from 'src/enums/Order';

/**
 * This class represents the filter for a video search query.
 */
export class VideoFilterDTO {
  title: string;
  creator: string;
  description: string;
  start_date: string;
  end_date: string;
  sort_by: string;
  order: string;
  page: number;
  per_page: number;

  constructor() {
    this.title = '';
    this.creator = '';
    this.description = '';
    this.start_date = '';
    this.end_date = '';
    this.sort_by = SortByProps.UPLOAD_DATE;
    this.order = Order.ASC;
    this.page = 1;
    this.per_page = 10;
  }
}
