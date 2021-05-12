import { unsplashAPI } from './index';
import { call, put, select } from 'redux-saga/effects';

export function* getRandomPhotos(): any {
  try {
    //??? ПЕРЕСМОТРИ НЕ ЗАБУДЬ
    const { countToLoad } = yield select((state) => state.photosReducer);
    const { currentPage } = yield select((state) => state.searchReducer);
    //
    const data = yield call(unsplashAPI.getRandomPhotos, countToLoad, currentPage);
    yield put({ type: `RANDOM_FETCH_RESOLVED`, payload: data });
    yield put({ type: `INC_CURRENT_PAGE` });
  } catch (error) {
    console.log(error);
  }
}

export function* getSinglePhoto({ payload }: { type: string; payload: string }): any {
  try {
    const data = yield call(unsplashAPI.getsinglePhoto, payload);
    yield put({ type: 'PHOTO_FAVORITES_ADDED', payload: data });
  } catch (error) {
    console.log(error);
  }
}

export function* getNextPhotos(): any {
  try {
    const { searchValue, currentPage } = yield select((state) => state.searchReducer);
    const data = yield call(unsplashAPI.searchPhotos, searchValue, currentPage);
    console.log(data);
    yield put({ type: `RANDOM_FETCH_RESOLVED`, payload: data });
    yield put({ type: `INC_CURRENT_PAGE` });
  } catch (error) {
    console.log(error);
  }
}

export function* getTopics(): any {
  try {
    const data = yield call(unsplashAPI.getTopics);
    yield put({ type: `TOPICS_FETCH_RESOLVED`, payload: data });
  } catch (error) {
    console.log(error);
  }
}

export function* searchPhoto({ payload }: { type: string; payload: string }): any {
  try {
    const data = yield call(unsplashAPI.searchPhotos, payload);
    yield put({ type: 'CLEAR_PHOTOS' });
    yield put({ type: `RANDOM_FETCH_RESOLVED`, payload: data });
  } catch (error) {
    console.log(error);
  }
}
