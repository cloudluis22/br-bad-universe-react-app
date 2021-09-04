import React from 'react';
import Modal from 'react-modal';

export const CharacterModal = () => {
  return (
    <div>
      <Modal isOpen='true' className='modal' overlayClassName='modal-overlay'>
        <p>Hola</p>
      </Modal>
    </div>
  );
};
