import React from 'react';
import { SearchBar } from '../ui/SearchBar';

import { getData } from '../../helpers/getData';

import brbaFullSizeImg from '../../images/brba-screen-full.png';
import brbaMobileSizeImg from '../../images/brba-screen-mobile.png';

export const BrBaScreen = () => {
  const handleSearch = (value = '') => {
    console.log(value);
  };

  getData();

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
    </div>
  );
};
