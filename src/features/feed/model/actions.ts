import { RANDOM_FETCH_REQUESTED, PHOTOS_FETCH_NEXT_REQUESTED } from './types';

export const fetchPhotos = () => ({
  type: RANDOM_FETCH_REQUESTED,
});

export const fetchNextPagePhotos = () => ({
  type: PHOTOS_FETCH_NEXT_REQUESTED,
});
