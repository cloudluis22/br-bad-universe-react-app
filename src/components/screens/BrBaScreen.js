import React from 'react';

import { useFetchData } from '../../hooks/useFetchData';
import { CharacterModal } from '../characters/CharacterModal';
import { SearchBar } from '../ui/SearchBar';
import { Loading } from '../ui/Loading';
import { CharacterGrid } from '../characters/CharacterGrid';
import { Footer } from '../ui/Footer';
import { FatalError } from '../ui/FatalError';
import { SwitchPage } from '../ui/SwitchPage';

import brbaFullSizeImg from '../../images/brba-screen-full.png';
import brbaMobileSizeImg from '../../images/brba-screen-mobile.png';

export const BrBaScreen = () => {
  const handleSearch = (value = '') => {
    setSearch(value);
  };

  const { dataState, setSearch } = useFetchData(false);
  const { data, loading, ok } = dataState;

  return (
    <div className='background-brba-green'>
      <SwitchPage />
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
      <CharacterModal />
    </div>
  );
};
