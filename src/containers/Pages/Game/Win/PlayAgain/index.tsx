import React, { useContext } from 'react';

import { IProps } from './types';
import { TScore } from '@root/typings';

import Button from '@root/components/Button';
import If from '@root/components/If';

import { I18nContext } from '@root/i18n';

import s from './styles.scss';

const PlayAgain: React.FC<IProps> = ({ handleNextLevel, handleRetry, level }) => {
  const { labels } = useContext(I18nContext);
  const storage = localStorage.getItem('find8') || '{}';
  const score: TScore = JSON.parse(storage);
  const hasInsanityLevel = level === 'insanity' && !!score?.insanity;

  return (
    <>
      <If condition={!hasInsanityLevel}>
        <div className={s.playAgain}>
          {labels.win.challengeYourself}
          <Button variant="link" label={labels.buttons.nextLevel} onClick={handleNextLevel} />
          {labels.general.or}
          <Button variant="link" label={labels.buttons.retry} onClick={handleRetry} />
        </div>
      </If>
      <If condition={hasInsanityLevel}>
        {labels.win.retryInsanity}
        <Button variant="link" label={labels.buttons.retry} onClick={handleRetry} />
      </If>
    </>
  );
};

export default PlayAgain;
