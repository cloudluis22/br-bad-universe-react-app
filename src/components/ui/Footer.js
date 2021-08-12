import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <div>
      <div className='icons-container'>
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faCode} />
        <FontAwesomeIcon icon={faDatabase} />
      </div>
      <div className='about-info'>
        This web application was made using React JS and The Breaking Bad API.
      </div>
      <div className='copyright-info'>© created by cloudluis22</div>
    </div>
  );
};
