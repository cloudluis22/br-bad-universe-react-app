import React from 'react';
import { SearchBar } from '../ui/SearchBar';

import { Loading } from '../ui/Loading';
import { CharacterGrid } from '../ui/CharacterGrid';
import { Footer } from '../ui/Footer';
import { useFetchData } from '../../hooks/useFetchData';

import brbaFullSizeImg from '../../images/brba-screen-full.png';
import brbaMobileSizeImg from '../../images/brba-screen-mobile.png';
import { FatalError } from '../ui/FatalError';

export const BrBaScreen = () => {
  const handleSearch = (value = '') => {
    setSearch(value);
  };

  const { dataState, setSearch } = useFetchData(false);
  const { data, loading, ok } = dataState;

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
      {loading ? (
        <Loading />
      ) : ok ? (
        <CharacterGrid data={data} />
      ) : (
        <FatalError />
      )}
      <Footer />
    </div>
  );
};
