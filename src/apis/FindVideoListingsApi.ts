import axios, { AxiosResponse, HttpStatusCode } from 'axios';
import { VideoListingDTO } from 'src/dtos/VideoListingDTO';
import { VideoFilterDTO } from 'src/dtos/VideoFilterDTO';

export class FindVideoListingsApi{
  static async execute(filter: VideoFilterDTO): Promise<VideoListingDTO[]> {
    const response: AxiosResponse = await axios.post('/video/filter', filter);

    if(response.status != HttpStatusCode.Ok)
      return [];

    return JSON.parse(response.data) as VideoListingDTO[];
  }
}
