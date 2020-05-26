import React from 'react';

import { IProps } from './types';

import Button from 'react-bootstrap/Button';
import Logo from '@root/components/Logo';

import labels from '@root/i18n';

import s from './styles.scss';

const Tutorial: React.FC<IProps> = ({ setStartTime }) => {
  return (
    <div className={s.tutorial}>
      <Logo className={s.logoTop} />
      <h3 className={s.title}>{labels.tutorial.title}</h3>
      <div className={s.content}>
        <div>{labels.tutorial.oneCharIsDifferent}</div>
        <div>
          {labels.general.click}{' '}
          <Button variant="link" onClick={() => setStartTime(+new Date())}>
            {labels.buttons.play}
          </Button>{' '}
          {labels.tutorial.andTry}
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
