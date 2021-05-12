import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Flex } from '../../../ui/atoms';

import { searchTerms } from '../model/selectors';

//НАПИШИ ФУНКЦИЮ ДЛЯ ГЕНЕРАЦИИ ID
export const History = () => {
  const data = useSelector(searchTerms);
  return (
    <Flex m={10} justifyContent='center'>
      <ul>
        {data?.map((item: string, index: number) => (
          <HistoryItem key={index}>{item}</HistoryItem>
        ))}
      </ul>
    </Flex>
  );
};

const HistoryItem = styled.li`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
  padding: 10px;
`;
