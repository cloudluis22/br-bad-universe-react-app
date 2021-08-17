import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

export const SearchBar = ({ bcs }) => {
  const handleSearchSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form className='search-bar-wrapper' onSubmit={handleSearchSubmit}>
      <input
        type='text'
        placeholder='Search characters'
        className='search-bar'
      />
      <FontAwesomeIcon icon={faTimes} className='clear-icon' />
      <button
        type='submit'
        className={
          // Por defecto se coloca el diseño de Breaking Bad a menos de que se especifique esto.
          bcs ? 'search-btn search-color-red' : 'search-btn search-color-green'
        }>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};
