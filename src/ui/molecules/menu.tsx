import styled from 'styled-components';

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 200px;
  font-size: 1.1em;
`;

export const Menu = ({ children }: { children: React.ReactNode }) => (
  <MenuWrapper>{children}</MenuWrapper>
);
