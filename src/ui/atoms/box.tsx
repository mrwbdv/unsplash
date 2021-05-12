import styled from 'styled-components';

import {
  compose,
  flexbox,
  position,
  space,
  FlexboxProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';

export type BoxProps = FlexboxProps & PositionProps & SpaceProps;

export const Box = styled.div<BoxProps>(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  compose(flexbox, position, space),
);
