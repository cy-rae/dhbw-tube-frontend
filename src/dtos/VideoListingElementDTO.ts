/**
 * Data Transfer Object for Video Listing Element
 */
export class VideoListingElementDTO {
  id: string;
  title: string;
  creator: string;
  upload_date: Date;

  constructor() {
    this.id = '';
    this.title = '';
    this.creator = '';
    this.upload_date = new Date();
  }
}
