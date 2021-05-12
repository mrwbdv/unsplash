import React from 'react';

import { MainTemplate, Container } from '../../../ui/templates';
import { HeaderContent } from '../organisms';

export const CommonTemplate = ({
  header,
  children,
}: {
  header?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <MainTemplate header={header}>
    <Container>{children}</Container>
  </MainTemplate>
);

CommonTemplate.defaultProps = {
  header: <HeaderContent />,
};
