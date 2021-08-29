import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export const FatalError = () => {
  return (
    <div className='fetch-message-container'>
      <FontAwesomeIcon icon={faTimesCircle} className='fetch-message-icon' />
      <p>
        Failed connecting to the database! Please check your internet connection
        and try again.
      </p>
    </div>
  );
};
