export interface IStreamVideoApi {
  get(id: string): Promise<string | null>;
}
