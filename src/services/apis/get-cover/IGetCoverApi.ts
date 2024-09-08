export interface IGetCoverApi {
  get(videoId: string): Promise<Blob | null>;
}
