import styled from 'styled-components';

export const GridContainer = styled.div`
  width: 100%;
  margin: 2% auto;
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: start;
`;
