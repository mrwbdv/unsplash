import { PHOTO_FAVORITES_REQUESTED } from './types';

export const addFavoritesPhoto = (id: string) => ({
  type: PHOTO_FAVORITES_REQUESTED,
  payload: id,
});
