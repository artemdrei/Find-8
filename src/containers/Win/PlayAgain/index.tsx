import React from 'react';

import { IProps } from './types';
import { TScore } from '@root/typings';

import Button from '@root/components/Button';
import If from '@root/components/If';

import labels from '@root/i18n';

import s from './styles.scss';

const PlayAgain: React.FC<IProps> = ({ handleNextLevel, handleRetry, level }) => {
  const score: TScore = JSON.parse(localStorage.getItem('find8') as string);
  const hasInsanityLevel = level === 'insanity' && !!score?.insanity;

  return (
    <>
      <If condition={!hasInsanityLevel}>
        <div className={s.playAgain}>
          {labels.win.challengeYourself}
          <Button variant="link" size="large" label={labels.buttons.nextLevel} onClick={handleNextLevel} />
          {labels.general.or}
          <Button variant="link" size="large" label={labels.buttons.retry} onClick={handleRetry} />
        </div>
      </If>
      <If condition={hasInsanityLevel}>
        {labels.win.retryInsanity}
        <Button variant="link" size="large" label={labels.buttons.retry} onClick={handleRetry} />
      </If>
    </>
  );
};

export default PlayAgain;
