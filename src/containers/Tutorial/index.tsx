import React from 'react';

import { IProps } from './types';

import Button from '@root/components/Button';

import labels from '@root/i18n';

import s from './styles.scss';

const Tutorial: React.FC<IProps> = ({ setStartTime }) => {
  return (
    <section className={s.tutorial}>
      <h2 className={s.title}>{labels.tutorial.title}</h2>
      <div className={s.content}>
        <div>{labels.tutorial.oneCharIsDifferent}</div>
        <div>
          {labels.general.click}
          <Button
            variant="link"
            size="large"
            label={labels.buttons.play}
            onClick={() => setStartTime(+new Date())}
          />
          {labels.tutorial.andTry}
        </div>
      </div>
    </section>
  );
};

export default Tutorial;
