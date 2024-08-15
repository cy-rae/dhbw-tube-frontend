export class UploadVideoDTO {
  title: string;
  creator: string;
  description: string;
  video: File;
  cover: File;

  constructor(title: string, creator: string, description: string, video: File, cover: File) {
    this.title = title;
    this.creator = creator;
    this.description = description;
    this.video = video;
    this.cover = cover;
  }
}
