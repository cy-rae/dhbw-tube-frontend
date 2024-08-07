export class VideoFilterDTO {
  titleSubstr: string;
  usernameSubstr: string;

  constructor(titleSubstr?: string, usernameSubstr?: string) {
    this.titleSubstr = titleSubstr ?? '';
    this.usernameSubstr = usernameSubstr ?? '';
  }
}
