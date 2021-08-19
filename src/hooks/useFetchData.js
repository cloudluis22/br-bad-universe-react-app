import { useEffect, useState } from 'react';
import { getData } from '../helpers/getData';

const state = {
  ok: false,
  loading: true,
  data: [],
};

export const useFetchData = (isBCS, searchParam = '') => {
  const [dataState, setDataState] = useState(state);

  useEffect(() => {
    const info = getData('');
    setDataState({
      ok: true,
      loading: false,
      data: info,
    });
  }, []);

  return dataState;
};
