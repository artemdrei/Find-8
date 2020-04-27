import React from 'react';
import { IProps } from './types';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Congrats: React.FC<IProps> = ({ isShown, seekDuration, onHide }) => {
  const minutes = Math.floor(seekDuration / 60000);
  const seconds = +((seekDuration % 60000) / 1000).toFixed(2);
  const time = minutes
    ? seconds == 60
      ? minutes + 1 + ':00'
      : minutes + ':' + (seconds < 10 ? '0' : '') + seconds
    : seconds;
  const label = minutes ? (minutes > 2 ? 'minutes' : 'minutes') : seconds > 1 ? 'seconds' : 'second';

  return (
    <Modal show={isShown} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Congratulation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          You have found in {time} {label}
        </p>
        <p>Challenge yourself with next level!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Congrats;
