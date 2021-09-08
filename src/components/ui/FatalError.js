import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export const FatalError = ({ isBcs }) => {
  return (
    <div className='fetch-message-container'>
      <FontAwesomeIcon
        icon={faTimesCircle}
        className={`fetch-message-icon ${
          !isBcs ? 'icon-green' : 'icon-yellow'
        }`}
      />
      <p>
        Failed connecting to the database! Please check your internet connection
        and try again.
      </p>
    </div>
  );
};
