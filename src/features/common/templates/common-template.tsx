import React from 'react';

import { MainTemplate } from '../../../ui/templates';
import { HeaderContent } from '../organisms';

export const CommonTemplate = ({
  header,
  children,
}: {
  header?: React.ReactNode;
  children: React.ReactNode;
}) => <MainTemplate header={header}>{children}</MainTemplate>;

CommonTemplate.defaultProps = {
  header: <HeaderContent />,
};
