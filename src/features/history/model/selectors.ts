import { createSelector } from 'reselect';
import { RootStateOrAny } from 'react-redux';

const stateSearch = (state: RootStateOrAny) => state.searchReducer.searchTerms;

export const searchTerms = createSelector(stateSearch, (terms) => terms);
