import styled from 'styled-components';

export const Image = styled.img.attrs((props) => ({
  src: props.src,
}))`
  display: block;
  grid-row: 1 / -1;
  grid-column: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  border-radius: 8px;
  transition: all 0.1s;
`;
