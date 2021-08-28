import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

export const NotFound = () => {
  return (
    <div className='fetch-message-container'>
      <FontAwesomeIcon icon={faFrown} id='not-found-icon' />
      <p>
        Character not found! Make another search or reset to load all characters
        again.
      </p>
    </div>
  );
};
