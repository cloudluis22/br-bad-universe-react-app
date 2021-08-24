import React from 'react';

export const CharacterCard = ({ imgSrc, name }) => {
  return (
    <div className='character-card'>
      <img src={imgSrc} alt={name} className='character-img' />
      <span className='character-name'> {name} </span>
    </div>
  );
};
