import { combineReducers } from 'redux';

import { photosReducer } from './features/feed/model/reducer';
import { searchReducer } from './features/search/model/reducer';
import { favoritesReducer } from './features/favorites/model/reducer';

export const reducer = combineReducers({
  photosReducer,
  searchReducer,
  favoritesReducer,
});
