import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <div className='app-footer'>
      <div className='icons-container'>
        <a
          href='https://github.com/cloudluis22'
          target='_blank'
          rel='noreferrer'>
          <FontAwesomeIcon icon={faGithub} className='link-icon' />
        </a>
        <a
          href='https://github.com/cloudluis22/br-bad-universe-react-app'
          target='_blank'
          rel='noreferrer'>
          <FontAwesomeIcon icon={faCode} className='link-icon' />
        </a>
        <a href='https://breakingbadapi.com/' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faDatabase} className='link-icon' />
        </a>
      </div>
      <div id='about-info'>
        This web application was made using React JS and The Breaking Bad API.
      </div>
      <div id='copyright-info'>© powered by cloudluis22</div>
    </div>
  );
};
