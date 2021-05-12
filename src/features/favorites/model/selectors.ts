import { createSelector } from 'reselect';
import { RootStateOrAny } from 'react-redux';

const stateFavorites = (state: RootStateOrAny) => state.favoritesReducer.favorites;

export const favoritesItems = createSelector(stateFavorites, (favorites) => favorites);
