import React from 'react';

import { useFetchData } from '../../hooks/useFetchData';

import bcsFullSizeImg from '../../images/bcs-screen-full.png';
import bcsMobileSizeImg from '../../images/bcs-screen-mobile.png';

export const BCSScreen = () => {
  const handleSearch = (value = '') => {
    setSearch(value);
  };

  const { dataState, setSearch } = useFetchData(false);
  const { data, loading, ok } = dataState;

  return (
    <div className='background-bcs-red'>
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
    </div>
  );
};
