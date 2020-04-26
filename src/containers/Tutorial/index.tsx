import React from 'react';

import { IProps } from './types';

import Button from 'react-bootstrap/Button';

import s from './styles.scss';

const Tutorial: React.FC<IProps> = ({ setIsStarted }) => {
  return (
    <div>
      <h2 className={s.title}>Find 8</h2>
      <p>
        <p>One character is different from the rest.</p>
        <p>
          Click{' '}
          <Button variant="link" onClick={setIsStarted} className={s.playBtn}>
            Play
          </Button>{' '}
          and try to find it as quickly as possible
        </p>
      </p>
    </div>
  );
};

export default Tutorial;
