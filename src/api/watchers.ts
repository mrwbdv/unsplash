import { takeEvery } from 'redux-saga/effects';
import { getRandomPhotos, searchPhoto, getNextPhotos } from './workers';

export default function* rootSaga() {
  yield takeEvery('RANDOM_FETCH_REQUESTED', getRandomPhotos);
  yield takeEvery('SEARCH_TERM_SETTED', searchPhoto);
  yield takeEvery('PHOTOS_FETCH_NEXT_REQUESTED', getNextPhotos);
}
