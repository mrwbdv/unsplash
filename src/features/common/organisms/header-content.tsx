import { Link } from 'react-router-dom';

import { Icon, NavLink } from '../../../ui/atoms';
import { Menu } from '../../../ui/molecules';
import { Search } from '../../search';

export const HeaderContent = () => {
  return (
    <>
      <NavLink as={Link} to='/'>
        <Icon name='unsplash' width='32' height='32' viewBox='0 0 32 32' mr={3} ml={3} />
      </NavLink>
      <Search />
      <Menu>
        <NavLink as={Link} to='/favorites'>
          Favorites
        </NavLink>
        <NavLink as={Link} to='/history'>
          History
        </NavLink>
      </Menu>
    </>
  );
};
