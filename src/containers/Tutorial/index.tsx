import React from 'react';

import { IProps } from './types';

import Button from 'react-bootstrap/Button';

import s from './styles.scss';

const Tutorial: React.FC<IProps> = ({ setTime }) => {
  return (
    <div className={s.tutorial}>
      <h2 className={s.title}>Find 8</h2>
      <div>One character is different from the rest.</div>
      <div>
        Click{' '}
        <Button variant="link" onClick={() => setTime(+new Date())} className={s.playBtn}>
          Play
        </Button>{' '}
        and try to find it as quickly as possible
      </div>
    </div>
  );
};

export default Tutorial;
