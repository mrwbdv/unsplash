import { PHOTO_FAVORITES_ADDED, PHOTO_FAVORITES_REMOVED } from './types';

export interface IAction {
  type: string;
  payload?: any;
}

const initialState = {
  favorites: [],
};

export const favoritesReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case PHOTO_FAVORITES_ADDED:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};
