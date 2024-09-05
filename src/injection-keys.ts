import { InjectionKey } from 'vue';
import { IUploadVideoApi } from 'src/services/apis/upload-video/IUploadVideoApi';
import { ISearchVideosApi } from 'src/services/apis/search-videos/ISearchVideosApi';
import { IStreamVideoApi } from 'src/services/apis/stream-video/IStreamVideoApi';
import { IGetVideoApi } from 'src/services/apis/get-video/IGetVideoApi';

export const uploadVideoApiInjectionKey: InjectionKey<IUploadVideoApi> = Symbol('Injection key for API service to upload a video.');
export const getVideoApiInjectionKey: InjectionKey<IGetVideoApi> = Symbol('Injection key for API service to get a video.');
export const streamVideoApiInjectionKey: InjectionKey<IStreamVideoApi> = Symbol('Injection key for API service to stream a video.');

export const searchVideosApiInjectionKey: InjectionKey<ISearchVideosApi> = Symbol('Injection key for API service to filter videos.');
