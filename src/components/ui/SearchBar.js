import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

export const SearchBar = () => {
  return (
    <div className='search-bar-wrapper'>
      <FontAwesomeIcon icon={faSearch} />
      <input type='text' placeholder='Looking for a character/characters?' />
      <FontAwesomeIcon icon={faTimes} />
    </div>
  );
};
