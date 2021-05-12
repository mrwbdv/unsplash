import { AxiosRequestConfig } from 'axios';
import { apiConfig, API_RANDOM_PHOTOS, API_SEARCH_PHOTOS, API_TOPICS } from './config';

import { HttpClient } from './http-client';

import {
  IPhotoData,
  ISearchUntransformedData,
  IPhotoUntransformedData,
  ITopicUntransformedData,
} from './types';

class UnsplashService extends HttpClient {
  constructor(config: AxiosRequestConfig) {
    super(config);
  }

  getRandomPhotos = async (count: number = 10, page?: number) => {
    const { data } = await this.get<IPhotoUntransformedData[]>(API_RANDOM_PHOTOS, {
      params: { count, page },
    });
    const transformedData = data.map((data: any) => {
      return this.transformData(data);
    });
    return transformedData;
  };

  getTopics = async () => {
    const { data } = await this.get<ITopicUntransformedData[]>(API_TOPICS);
    return data.map((data: any) => {
      return this.transformTopicsData(data);
    });
  };

  searchPhotos = async (term: string, page?: number) => {
    const { data } = await this.get<ISearchUntransformedData>(API_SEARCH_PHOTOS, {
      params: { query: term, page },
    });
    const { results } = data;
    const transformedData = results.map((data: any): IPhotoData => {
      return this.transformData(data);
    });
    return transformedData;
  };

  //Transformation data
  private transformSearchData(data: ISearchUntransformedData) {
    return {
      total: data.total,
      data: data.results,
    };
  }

  private transformTopicsData(data: ITopicUntransformedData) {
    return {
      id: data.id,
      slug: data.slug,
      title: data.title,
      total: data.total_photos,
    };
  }

  private transformData(data: IPhotoUntransformedData) {
    return {
      id: data.id,
      alt: data.alt_description,
      smallUrl: data.urls.small,
      userName: data.user.username,
      userPic: data.user.profile_image.medium,
    };
  }
}

export const unsplashAPI = new UnsplashService(apiConfig);
