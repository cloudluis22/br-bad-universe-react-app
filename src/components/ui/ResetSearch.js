import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';

export const ResetSearch = ({ currentSearchParam }) => {
  return (
    <span>
      <FontAwesomeIcon icon={faRedoAlt} className='searchbar-container' />
    </span>
  );
};
