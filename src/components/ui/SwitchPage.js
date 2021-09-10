import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

export const SwitchPage = ({ isBcs }) => {
  return (
    <Link to={`${!isBcs ? '/bcs' : '/brba'}`}>
      <FontAwesomeIcon
        icon={faArrowAltCircleRight}
        className='arrow-switch-page'
      />
    </Link>
  );
};
