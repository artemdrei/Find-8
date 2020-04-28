import React from 'react';

import { TLevel } from '@root/typings';
import { IProps } from './types';

import { CONFIG } from '@root/config';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import gs from '@root/assets/styles/index.scss';

const Congrats: React.FC<IProps> = ({ isShown, seekDuration, level, setLevel, onHide }) => {
  const minutes = Math.floor(seekDuration / 60000);
  const seconds = +((seekDuration % 60000) / 1000).toFixed(2);
  const time = minutes
    ? seconds == 60
      ? minutes + 1 + ':00'
      : minutes + ':' + (seconds < 10 ? '0' : '') + seconds
    : seconds;
  const label = minutes ? (minutes > 2 ? 'minutes' : 'minutes') : seconds > 1 ? 'seconds' : 'second';

  const handleNextLevel = () => {
    const nextLevel = CONFIG.levels[level].nextLevel as TLevel;
    setLevel(nextLevel);
    onHide();
  };

  const handleRetry = () => {
    setLevel(level);
    onHide();
  };

  return (
    <Modal show={isShown} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Congratulation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          You have finished {level} level in{' '}
          <b>
            {time} {label}
          </b>
        </p>
        <p>
          Challenge yourself with{' '}
          <Button className={gs.btnLink} variant="link" onClick={handleNextLevel}>
            next level
          </Button>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={onHide}>
          Close
        </Button>
        <Button onClick={handleRetry}>Retry</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Congrats;
