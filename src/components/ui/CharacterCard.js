import React from 'react';
import PropTypes from 'prop-types';

export const CharacterCard = ({ imgSrc, name }) => {
  let textClass = '';

  if (name.trim().length > 18) {
    textClass = 'character-name small-font';
  } else {
    textClass = 'character-name';
  }

  return (
    <div className='character-card'>
      <img src={imgSrc} alt={name} className='character-img' />
      <span className={textClass}> {name} </span>
    </div>
  );
};

CharacterCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
