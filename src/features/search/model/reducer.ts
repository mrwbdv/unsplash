import { SEARCH_TERM_SETTED, SEARCH_TERM_ADDED, INC_CURRENT_PAGE } from './types';

export interface IAction {
  type: string;
  payload?: any;
}

const initialState = {
  searchTerms: [],
  searchValue: '',
  currentPage: 1,
};

export const searchReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SEARCH_TERM_SETTED:
      return {
        ...state,
        searchValue: action.payload,
      };
    case SEARCH_TERM_ADDED:
      return {
        ...state,
        searchTerms: [...state.searchTerms, action.payload],
      };
    case INC_CURRENT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    default:
      return state;
  }
};
