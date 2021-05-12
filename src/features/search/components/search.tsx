import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useInput } from '../../common/hooks/useInput';
import { searchTerms } from '../model/selectors';

import { SearchForm } from '../../../ui/molecules';
import { addSearchTerm, searchPhoto } from '../model/actions';

export const Search = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useInput();
  const searchedTerms = useSelector(searchTerms);

  const onSubmitHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = await validateForm();

    if (!isValid) {
      return;
    }
    dispatch(searchPhoto(term.toLowerCase()));
    dispatch(addSearchTerm(term.toLowerCase()));
  };
  const validateForm = () => {
    if (term.length < 1 || searchedTerms.includes(term.toLowerCase())) {
      return false;
    }
    return true;
  };

  return <SearchForm value={term} onChange={setTerm} onSubmit={onSubmitHandle} />;
};
