import styled from 'styled-components';

import { FlexboxProps, PositionProps } from 'styled-system';

import { Box } from './box';

export type FlexProps = FlexboxProps & PositionProps;

export const Flex = styled(Box)<FlexProps>({
  display: 'flex',
});
