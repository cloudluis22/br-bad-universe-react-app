import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

export const SearchBar = ({ bcs, brba }) => {
  return (
    <div className='search-bar-wrapper'>
      <input
        type='text'
        placeholder='Search characters'
        className='search-bar'
      />
      <FontAwesomeIcon icon={faTimes} className='clear-icon' />
      <button
        type='submit'
        className={
          brba ? 'search-btn search-color-green' : 'search-btn search-color-red'
        }>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};
