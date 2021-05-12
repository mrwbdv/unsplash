import { combineReducers } from 'redux';

import { photosReducer } from './features/feed/model';
import { searchReducer } from './features/search/model/reducer';

export const reducer = combineReducers({
  photosReducer,
  searchReducer,
});
