import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import { variant } from 'styled-system';

import { Flex } from './flex';
import { Box, BoxProps } from './box';

export type StyledButtonProps = {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  variant?: 'transparent';
};

const buttonVariants = variant({
  variants: {
    transparent: {
      bg: '#eee',
      borderColor: '#eee',
    },
  },
});

const StyledButton = styled.button<StyledButtonProps>`
  padding: 2px;
  background: #eee;
  transition: 0.25s;
  border: none;
  border-radius: 4px;
  color: #999;
  :hover {
    background: #fff;
    cursor: pointer;
  }
  ${buttonVariants}
`;

const ButtonIcon = styled(Box)<BoxProps>`
  svg {
    display: block;
  }
`;

export const Button = ({ leftIcon, rightIcon, children, ...props }: any) => (
  <StyledButton {...props}>
    <Flex alignItems='center' justifyContent='space-between'>
      {leftIcon && (
        <ButtonIcon ml={2} mr={2}>
          {leftIcon}
        </ButtonIcon>
      )}
      {children}
      {rightIcon && (
        <ButtonIcon mr={2} ml={2}>
          {rightIcon}
        </ButtonIcon>
      )}
    </Flex>
  </StyledButton>
);

Button.defaultProps = {
  variant: 'transparent',
};
