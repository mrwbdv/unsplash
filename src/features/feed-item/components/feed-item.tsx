import React from 'react';
import { Icon } from '../../../ui/atoms';
import { Button } from '../../../ui/atoms/button';

import {
  Item,
  ItemTopButtons,
  ItemBottomContainer,
  ItemUserProfilePicture,
  ItemUserProfileName,
  ItemUser,
} from './styles';

export const PhotoFeedItem = ({ img }: { img: string }) => {
  return (
    <Item>
      <ItemTopButtons>
        <Button
          leftIcon={<Icon name='heart' width='24' height='24' viewBox='0 0 24 24' fill='red' />}
        />
      </ItemTopButtons>
      <ItemBottomContainer>
        <ItemUser>
          <ItemUserProfilePicture src={img} alt='HEllloo' />
          <ItemUserProfileName>Hellooo</ItemUserProfileName>
        </ItemUser>
        <Button leftIcon={<Icon name='download' width='24' height='24' viewBox='0 0 24 24' />} />
      </ItemBottomContainer>
      <img loading='lazy' src={img} alt='' />
    </Item>
  );
};
