import React from 'react';
import { SearchBar } from '../ui/SearchBar';

import { useFetchData } from '../../hooks/useFetchData';

import brbaFullSizeImg from '../../images/brba-screen-full.png';
import brbaMobileSizeImg from '../../images/brba-screen-mobile.png';
import { Loading } from '../ui/Loading';

export const BrBaScreen = () => {
  const handleSearch = (value = '') => {
    setSearch(value);
  };

  const { dataState, setSearch } = useFetchData(false);
  const { data, loading } = dataState;
  console.log(data);

  return (
    <div className='background-brba-green'>
      <img
        src={brbaFullSizeImg}
        alt='Breaking Bad Full Logo'
        className='brba-logo-full'
      />
      <img
        src={brbaMobileSizeImg}
        alt='Breaking Bad Mobile Logo'
        className='brba-logo-mobile'
      />
      <SearchBar handleSearch={handleSearch} />
      {loading && <Loading />}
    </div>
  );
};
