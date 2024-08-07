export class UploadDTO{
  title: string;
  file: File;
  username: string;

  constructor(title: string, file: File, username: string) {
    this.title = title;
    this.file = file;
    this.username = username;
  }
}
