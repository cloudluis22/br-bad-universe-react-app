import React from 'react';

import { useFetchData } from '../../hooks/useFetchData';
import { CharacterModal } from '../characters/CharacterModal';
import { SearchBar } from '../ui/SearchBar';
import { Loading } from '../ui/Loading';
import { CharacterGrid } from '../characters/CharacterGrid';
import { Footer } from '../ui/Footer';
import { FatalError } from '../ui/FatalError';
import { SwitchPage } from '../ui/SwitchPage';

import bcsFullSizeImg from '../../images/bcs-screen-full.png';
import bcsMobileSizeImg from '../../images/bcs-screen-mobile.png';

export const BCSScreen = () => {
  const handleSearch = (value = '') => {
    setSearch(value);
  };

  const { dataState, setSearch } = useFetchData(true);
  const { data, loading, ok } = dataState;

  return (
    <div className='background-bcs-red'>
      <SwitchPage isBcs />
      <img
        src={bcsFullSizeImg}
        alt='Better Call Saul Full Logo'
        className='bcs-logo-full'
      />
      <img
        src={bcsMobileSizeImg}
        alt='Better Call Saul Mobile Logo'
        className='bcs-logo-mobile'
      />
      <SearchBar isBcs={true} handleSearch={handleSearch} />
      {loading ? (
        <Loading isBCS={true} />
      ) : ok ? (
        <CharacterGrid data={data} />
      ) : (
        <FatalError isBcs={true} />
      )}
      <Footer />
      <CharacterModal />
    </div>
  );
};
