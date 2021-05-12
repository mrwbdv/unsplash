import { paths } from './paths';

import { HomePage } from './home';
import { FavoritesPage } from './favorites';
import { NotFoundPage } from './not-found';
import { HistoryPage } from './history';

export const routes = [
  {
    path: paths.home(),
    exact: true,
    component: HomePage,
  },
  {
    path: paths.favorites(),
    exact: true,
    component: FavoritesPage,
  },
  {
    path: paths.history(),
    exact: true,
    component: HistoryPage,
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];
