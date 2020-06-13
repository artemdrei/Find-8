import React, { useContext } from 'react';

import { IProps } from './types';

import Button from '@root/components/Button';

import { I18nContext } from '@root/i18n';

import s from './styles.scss';

const Tutorial: React.FC<IProps> = ({ setStartTime }) => {
  const { labels } = useContext(I18nContext);

  return (
    <section className={s.tutorial}>
      <h2>{labels.tutorial.title}</h2>
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
