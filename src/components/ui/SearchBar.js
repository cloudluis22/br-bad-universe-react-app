import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

export const SearchBar = ({ color }) => {
  return (
    <div className='search-bar-wrapper'>
      <input
        type='text'
        placeholder='Search characters'
        className='search-bar'
      />
      <FontAwesomeIcon icon={faTimes} className='clear-icon' />
      <button type='submit' className='search-btn search-color-green'>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};
