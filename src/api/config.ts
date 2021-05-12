import { AxiosRequestConfig } from 'axios';

export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

export const API_BASE = process.env.REACT_APP_API_BASE || 'https://api.unsplash.com/';

export const API_RANDOM_PHOTOS = '/photos';
export const API_SEARCH_PHOTOS = '/search/photos';
export const API_TOPICS = '/topics';

export const apiConfig: AxiosRequestConfig = {
  timeout: 15000,
  baseURL: API_BASE,
  headers: {
    common: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    Authorization: `Client-ID ${CLIENT_ID}`,
  },
};
