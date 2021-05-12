import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 62px;
  border-bottom: 1px solid #eee;
  width: 100%;
  z-index: 1;
  -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
`;

export const HeaderBox = ({ children }: { children: React.ReactNode }) => (
  <HeaderWrapper>{children}</HeaderWrapper>
);
