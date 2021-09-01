import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faTimes,
  faRedoAlt,
} from '@fortawesome/free-solid-svg-icons';
import { useForm } from '../../hooks/useForm';

export const SearchBar = ({ bcs, handleSearch }) => {
  const [searchValue, handleInputChange, reset] = useForm({
    search: '',
  });

  const { search } = searchValue;

  const [clearState, setClearState] = useState(false);

  const [tempSearchValue, setTempSearchValue] = useState('');

  useEffect(() => {
    if (search.length > 0) {
      setClearState(true);
    } else {
      setClearState(false);
    }
  }, [search]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (search.length < 1) {
      return;
    }

    setTempSearchValue(search);
    handleSearch(search);
    reset();
  };

  return (
    <form className='searchbar-wrapper' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Search characters'
        name='search'
        value={search}
        onChange={handleInputChange}
        className='searchbar'
      />
      {clearState && (
        <FontAwesomeIcon
          icon={faTimes}
          className='clear-icon'
          onClick={reset}
        />
      )}

      <button
        type='submit'
        className={
          /*
            Por defecto se coloca el diseño de Breaking Bad a menos de que se especifique.
            -----------------------------------------------------------------------------------
            By default it uses the Breaking Bad design unless specified.
          */
          bcs ? 'search-btn search-color-red' : 'search-btn search-color-green'
        }>
        <FontAwesomeIcon icon={faSearch} />
      </button>
      {!!tempSearchValue && (
        <span className='reset-search-icon' onClick={() => handleSearch('')}>
          <FontAwesomeIcon icon={faRedoAlt} className='searchbar-container' />
        </span>
      )}
    </form>
  );
};

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
