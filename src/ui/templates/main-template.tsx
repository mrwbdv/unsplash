import React from 'react';
import { HeaderBox } from '../organisms';

export const MainTemplate = ({
  header,
  children,
}: {
  header?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <>
      {header && <HeaderBox>{header}</HeaderBox>}
      {children}
    </>
  );
};
