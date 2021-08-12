import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faDatabase,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <div className='app-footer'>
      <div className='icons-container'>
        <FontAwesomeIcon icon={faGithub} className='link-icon' />
        <FontAwesomeIcon icon={faCode} className='link-icon' />
        <FontAwesomeIcon icon={faDatabase} className='link-icon' />
      </div>
      <div className='about-info'>
        This web application was made using React JS and The Breaking Bad API.
      </div>
      <div className='copyright-info'>© created by cloudluis22</div>
    </div>
  );
};
