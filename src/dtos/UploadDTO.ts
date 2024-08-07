export class UploadDTO{
  title: string;
  username: string;
  video: File;
  cover: File;

  constructor(title: string, username: string, video: File, cover: File) {
    this.title = title;
    this.username = username;
    this.video = video;
    this.cover = cover;
  }
}
