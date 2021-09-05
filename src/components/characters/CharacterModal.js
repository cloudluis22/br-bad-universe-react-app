import React, { useContext } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { CharacterContext } from '../CharacterContext';

export const CharacterModal = () => {
  const { context, setContext } = useContext(CharacterContext);

  const { isOpen, character } = context;

  const {
    imgSrc,
    name,
    birthday,
    occupation,
    status,
    nickname,
    appearance,
    portrayed,
    category,
  } = character;

  const closeModal = () => {
    setContext({
      isOpen: false,
      character: {},
    });
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        className='modal'
        overlayClassName='modal-overlay'
        onRequestClose={closeModal}>
        <h1 className='modal-name'> {name} </h1>

        <FontAwesomeIcon
          icon={faTimesCircle}
          className='modal-close'
          onClick={closeModal}
        />

        <div className='modal-character-container'>
          <div className='modal-image-container'>
            <img src={imgSrc} className='modal-image' />
          </div>
        </div>
      </Modal>
    </div>
  );
};
