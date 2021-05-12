import styled from 'styled-components';
import { Input } from '../atoms';

interface ISearchForm {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
export const SearchForm: React.FC<ISearchForm> = ({ value, onChange, onSubmit, ...props }) => (
  <SearchFormWrapper onSubmit={onSubmit}>
    <Input
      name='search'
      type='text'
      placeholder='Search photos...'
      value={value}
      onChange={onChange}
      {...props}
    />
  </SearchFormWrapper>
);

const SearchFormWrapper = styled.form`
  display: flex;
  flex-grow: 1;
`;
