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

  /**
   * Get the size of the data in bytes
   */
  getSize(): number {
    let size = 0;

    // Get sizes of strings in bytes
    size += new Blob([this.title]).size;
    size += new Blob([this.creator]).size;
    size += new Blob([this.description]).size;

    if (this.cover) {
      size += this.cover.size;
    }
    if (this.video) {
      size += this.video.size;
    }

    return size;
  }
}
