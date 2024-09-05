import {SortByProps} from 'src/enums/SortByProps';
import {Order} from 'src/enums/Order';

export class VideoFilterDTO {
  title: string;
  creator: string;
  description: string;
  upload_date: string;
  sortBy: SortByProps;
  order: Order;
  page: number;
  per_page: number;

  constructor(title?: string, creator?: string, description?: string, upload_date?: string, sortBy?: SortByProps, order?: Order, page?: number, per_page?: number) {
    this.title = title ?? '';
    this.creator = creator ?? '';
    this.description = description ?? '';
    this.upload_date = upload_date ?? '';
    this.sortBy = sortBy ?? SortByProps.UPLOAD_DATE;
    this.order = order ?? Order.ASC;
    this.page = page ?? 1;
    this.per_page = per_page ?? 10;
  }
}
