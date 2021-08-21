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
    let result = [];
    const fetchData = async () => {
      const info = await getData(searchParam);

      if (!isBCS) {
        result = info.filter(
          (char) => char.better_call_saul_appearance.length === 0
        );
      } else {
        result = info.filter(
          (char) => char.better_call_saul_appearance.length !== 0
        );
      }

      setDataState({
        ok: true,
        loading: false,
        data: result,
      });
    };

    fetchData();
  }, [searchParam, isBCS]);

  return dataState;
};
