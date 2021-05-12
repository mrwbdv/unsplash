import { createStore, applyMiddleware, compose } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from './api/watchers';
import { reducer } from './rootReducer';

export const config = {
  key: 'app',
  storage,
  whitelist: ['favoritesReducer', 'searchReducer'],
};

export const persisted = persistReducer(config, reducer);

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  persisted,
  compose(applyMiddleware(sagaMiddleware), composeWithDevTools()),
);

sagaMiddleware.run(rootSaga);
