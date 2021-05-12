import { CommonTemplate } from './features/common/templates';
import { GlobalStyles } from './global-styles';
import { Pages } from './pages';

export const App = () => {
  return (
    <CommonTemplate>
      <GlobalStyles />
      <Pages />
    </CommonTemplate>
  );
};
