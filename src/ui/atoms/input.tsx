import styled from 'styled-components';

interface InputProps {
  autoComplete?: string;
  disabled?: boolean;
  label?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: string;
  value: string;
}

export const Input = ({
  autoComplete,
  disabled,
  name,
  onChange,
  placeholder,
  type,
  value,
}: InputProps) => (
  <>
    <InputNative
      autoComplete={autoComplete}
      disabled={disabled}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  </>
);

const InputNative = styled.input`
  width: 100%;
  border: 1px solid #eee;
  border-radius: 24px;
  outline: none;
  transition: 0.35s;
  height: 40px;
  background: #eee url('/assets/img/search.svg') left no-repeat;
  background-size: 15px;
  background-position-x: 12px;
  padding-left: 40px;
  :hover {
    border: 1px solid #ccc;
  }
  :focus {
    border: 1px solid #ccc;
    background-color: #fff;
  }
  ::placeholder {
    color: #999;
  }
`;
