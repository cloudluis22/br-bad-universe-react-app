import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { CharacterContext } from '../CharacterContext';

export const CharacterCard = ({
  imgSrc,
  name,
  birthday,
  occupation,
  status,
  nickname,
  appearance,
  portrayed,
  category,
}) => {
  let textClass = '';

  if (name.trim().length > 18) {
    textClass = 'character-name small-font';
  } else {
    textClass = 'character-name';
  }

  const { setContext } = useContext(CharacterContext);

  const openCharacterModal = () => {
    setContext({
      isOpen: true,
      character: {
        imgSrc,
        name,
        birthday,
        occupation,
        status,
        nickname,
        appearance,
        portrayed,
        category,
      },
    });
  };

  return (
    <div className='character-card' onClick={openCharacterModal}>
      <img src={imgSrc} alt={name} className='character-img' />
      <span className={textClass}> {name} </span>
    </div>
  );
};

CharacterCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
