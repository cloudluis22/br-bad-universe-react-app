import React, { useContext } from 'react';
import Modal from 'react-modal';

import { CharacterContext } from '../CharacterContext';

export const CharacterModal = () => {
  const { context, setContext } = useContext(CharacterContext);

  const { isOpen, character } = context;

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
        <p>Hola</p>
      </Modal>
    </div>
  );
};
