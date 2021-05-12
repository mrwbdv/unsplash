import styled from 'styled-components';
import { space } from 'styled-system';

interface Props {
  id: string;
  fill: string;
}

const getIconPath = (name: string, props: Props) => {
  switch (name) {
    case 'unsplash':
      return <path {...props} d='M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z' />;
    case 'heart':
      return (
        <path
          {...props}
          d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
        />
      );
    case 'download':
      return <path {...props} d='M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z' />;
      return;
    default:
      return <path />;
  }
};

const IconStyled = styled.svg`
  ${space}
`;
export const Icon = ({
  id = 'icon',
  name = '',
  width = '36px',
  height = '36px',
  fill = '#000',
  style = {},
  viewBox = '0 0 384 512',
  ...props
}) => (
  <IconStyled
    width={width}
    height={height}
    style={style}
    viewBox={viewBox}
    aria-hidden='true'
    focusable='false'
    data-icon='bookmark'
    role='img'
    xmlns='http://www.w3.org/2000/svg'
    {...props}>
    {getIconPath(name, { id, fill })}
  </IconStyled>
);
