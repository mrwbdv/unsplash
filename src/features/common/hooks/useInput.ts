import { useState } from 'react';

export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type OnChange = (e: ChangeEvent) => void;

export const useInput = (): [string, OnChange] => {
  const [value, setValue] = useState<string>('');

  const onChange: OnChange = (data) => {
    setValue(data.target.value);
  };
  return [value, onChange];
};
