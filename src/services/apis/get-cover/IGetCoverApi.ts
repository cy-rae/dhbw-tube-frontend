export interface IGetCoverApi {
  get(videoId: string): Promise<string | null>;
}
