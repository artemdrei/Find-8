import React from 'react';
import { IProps } from './types';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Congrats: React.FC<IProps> = ({ isShown, onHide }) => {
  return (
    <Modal show={isShown} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Congratulation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>You have found in 9999 seconds.</p>
        <p>Challenge yourself with next level!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Congrats;