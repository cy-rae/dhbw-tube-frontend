export class VideoMetadataDTO {
  id: string;
  title: string;
  creator: string;
  description: string;
  cover_filename: string;
  video_filename: string;
  upload_date: Date;

  constructor() {
    this.id = '';
    this.title = '';
    this.creator = '';
    this.description = '';
    this.cover_filename = '';
    this.video_filename = '';
    this.upload_date = new Date();
  }
}
