import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 20px;
  margin-top: 20px;
  max-width: 1440px;
  overflow: hidden;
  columns: 3;
  column-gap: 20px;

  @media (max-width: 1024px) {
    padding: 0 15px;
    columns: 2;
    column-gap: 15px;
  }
  @media (max-width: 600px) {
    padding: 0;
    columns: 1;
    column-gap: 10px;
  }
`;
