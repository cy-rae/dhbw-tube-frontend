import { InjectionKey } from 'vue';
import { IUploadVideoApi } from 'src/services/apis/upload-video/IUploadVideoApi';
import { ISearchVideosApi } from 'src/services/apis/search-videos/ISearchVideosApi';
import { IGetVideoMetadataApi } from 'src/services/apis/get-video-metadata/IGetVideoMetadataApi';
import {IGetCoverApi} from 'src/services/apis/get-cover/IGetCoverApi';
import {IDateService} from 'src/services/date-service/IDateService';
import {IRuleService} from 'src/services/rule-service/IRuleService';

// Upload API service
export const uploadVideoApiInjectionKey: InjectionKey<IUploadVideoApi> = Symbol('Injection key for API service to upload a video.');

// Stream API service
export const getCoverApiInjectionKey: InjectionKey<IGetCoverApi> = Symbol('Injection key for API service to get a cover.');
export const getVideoMetadataApiInjectionKey: InjectionKey<IGetVideoMetadataApi> = Symbol('Injection key for API service to get the metadata of a video.');
export const searchVideosApiInjectionKey: InjectionKey<ISearchVideosApi> = Symbol('Injection key for API service to filter videos.');

// Other services
export const dateServiceInjectionKey: InjectionKey<IDateService> = Symbol('Injection key for date service.');
export const ruleServiceInjectionKey: InjectionKey<IRuleService> = Symbol('Injection key for rule service.');
