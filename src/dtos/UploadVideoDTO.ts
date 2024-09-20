/**
 * Data Transfer Object for uploading a video
 */
export class UploadVideoDTO {
  title: string;
  creator: string;
  description: string;
  video: File | null | undefined;
  cover: File | null | undefined;

  constructor() {
    this.title = '';
    this.creator = '';
    this.description = '';
    this.video = null;
    this.cover = null;
  }

  reset(): void {
    this.title = '';
    this.creator = '';
    this.description = '';
    this.video = null;
    this.cover = null;
  }
}
