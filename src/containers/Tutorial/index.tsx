import React from 'react';

import { IProps } from './types';

import Button from 'react-bootstrap/Button';
import Logo from '@root/components/Logo';

import s from './styles.scss';
import gs from '@root/assets/styles/index.scss';

const Tutorial: React.FC<IProps> = ({ setStartTime }) => {
  return (
    <div className={s.tutorial}>
      <Logo className={s.logoTop} />
      <h2>Tutorial</h2>
      <div className={s.content}>
        <div>One character is different from the rest.</div>
        <div>
          Click{' '}
          <Button variant="link" onClick={() => setStartTime(+new Date())} className={gs.btnLink}>
            Play
          </Button>{' '}
          and try to find it as quickly as possible
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
