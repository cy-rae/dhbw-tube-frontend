/**
 * This class represents the metadata of a video.
 */
export class VideoMetadataDTO {
  id: string;
  title: string;
  creator: string;
  description: string;
  upload_date: Date;

  constructor() {
    this.id = '';
    this.title = '';
    this.creator = '';
    this.description = '';
    this.upload_date = new Date();
  }
}
