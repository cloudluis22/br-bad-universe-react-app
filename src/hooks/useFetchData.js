import { useEffect, useState } from 'react';
import { getData } from '../helpers/getData';

const state = {
  ok: false,
  loading: true,
  data: [],
};

export const useFetchData = (isBCS) => {
  const [dataState, setDataState] = useState(state);
  const [paramState, setParamState] = useState('');

  const setSearch = (value) => {
    setParamState(value);
  };

  useEffect(() => {
    let result = [];
    const fetchData = async () => {
      try {
        const info = await getData(paramState);

        if (!isBCS) {
          result = info.filter((char) => char.appearance.length > 0);
        } else {
          result = info.filter(
            (char) => char.better_call_saul_appearance.length > 0
          );
        }

        setDataState({
          ok: true,
          loading: false,
          data: result,
          searchParam: paramState,
        });
      } catch (error) {
        console.log('xs');
        setDataState({
          ok: false,
          loading: false,
          data: [],
        });
      }
    };

    fetchData();
  }, [isBCS, paramState]);

  return {
    dataState,
    setSearch,
  };
};
