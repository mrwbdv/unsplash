import { RANDOM_FETCH_RESOLVED, CLEAR_PHOTOS, IAction } from './types';

const initialState = {
  photos: [],
  countToLoad: 10,
  loading: true,
  error: null,
};

export const photosReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case RANDOM_FETCH_RESOLVED:
      return {
        ...state,
        photos: [...state.photos, ...action.payload],
        loading: false,
      };
    case CLEAR_PHOTOS:
      return {
        ...state,
        photos: [],
      };
    default:
      return state;
  }
};
