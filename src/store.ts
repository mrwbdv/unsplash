import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from './api/watchers';
import { reducer } from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware), composeWithDevTools()),
);

sagaMiddleware.run(rootSaga);
