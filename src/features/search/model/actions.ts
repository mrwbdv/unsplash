import { SEARCH_TERM_SETTED, SEARCH_TERM_ADDED } from './types';

export const searchPhoto = (term: string) => ({
  type: SEARCH_TERM_SETTED,
  payload: term,
});

export const addSearchTerm = (searchTerm: string) => ({
  type: SEARCH_TERM_ADDED,
  payload: searchTerm,
});
