import React, { useContext, useEffect } from 'react';
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
  } = character;

  const closeModal = () => {
    setContext({
      isOpen: false,
      character: {
        occupation: [],
        appearance: [],
      },
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
            <img src={imgSrc} className='modal-image' alt={name} />
          </div>

          <div className='modal-attributes-container'>
            <div className='character-attribute-container'>
              <h2 className='character-attribute-title'> Portrayed by: </h2>
              <p className='character-attribute-value'> {portrayed} </p>
            </div>

            <div className='character-attribute-container'>
              <h2 className='character-attribute-title'> Birthday: </h2>
              <p className='character-attribute-value'> {birthday} </p>
            </div>

            <div className='character-attribute-container'>
              <h2 className='character-attribute-title'> Nickname: </h2>
              <p className='character-attribute-value'> {nickname} </p>
            </div>

            <div className='character-attribute-container'>
              <h2 className='character-attribute-title'> Occupation: </h2>
              {occupation.map((occ) => {
                return <p className='character-attribute-value'> {occ} </p>;
              })}
            </div>

            <div className='character-attribute-container'>
              <h2 className='character-attribute-title'> Status: </h2>
              <p className='character-attribute-value'> {status} </p>
            </div>

            <div className='character-attribute-container'>
              <h2 className='character-attribute-title'> Appearance: </h2>
              <p className='character-attribute-value'>
                {`Since season ${appearance[0]}`}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
