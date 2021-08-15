import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

export const SearchBar = () => {
  return (
    <div className='search-bar-wrapper'>
      <FontAwesomeIcon icon={faSearch} className='search-icon' />
      <input
        type='text'
        placeholder='Looking for a character/characters?'
        className='search-bar'
      />
      <FontAwesomeIcon icon={faTimes} className='clear-icon' />
    </div>
  );
};
