import React from 'react';

import { TLevel } from '@root/typings';
import { IProps } from './types';

import { CONFIG } from '@root/config';

import Button from 'react-bootstrap/Button';
import Logo from '@root/components/Logo';

import { getRandomWord } from '@root/utils';
import { getSeekDuration } from './utils/getSeekDuration';

import labels from '@root/i18n';

import s from './styles.scss';
import gs from '@root/assets/styles/index.scss';

import MedalIcon from '@root/assets/icons/medal.svg';
import CheckIcon from '@root/assets/icons/check.svg';

const Congrats: React.FC<IProps> = ({ startTime, endTime, level, setLevel, setStartTime, setEndTime }) => {
  const score = JSON.parse(localStorage.getItem('find8') as string);
  const { time, units } = getSeekDuration(startTime, endTime);
  const bestResult = score[level] ? getSeekDuration(score[level].startTime, score[level].endTime) : null;

  const handleNextLevel = () => {
    const nextLevel = CONFIG.levels[level].nextLevel as TLevel;
    setLevel(nextLevel);
    setStartTime(+new Date());
    setEndTime(0);
  };

  const handleRetry = () => {
    setStartTime(+new Date());
    setEndTime(0);
  };

  const title = getRandomWord(labels.win.title);

  return (
    <div>
      <Logo className={s.logoTop} />
      <h2 className={s.title}>{title}</h2>
      <div className={s.content}>
        <div>
          <CheckIcon className={s.checkIcon} />
          {labels.win.currentTime}:{' '}
          <b>
            {time}
            {units}
          </b>
        </div>
        {bestResult ? (
          <div className={s.bestScore}>
            <MedalIcon className={s.medalIcon} /> {labels.win.bestResult}:{' '}
            <b>
              {bestResult.time}
              {bestResult.units}
            </b>
          </div>
        ) : null}
        <div className={s.playAgain}>
          {labels.win.challengeYourself}{' '}
          <Button className={gs.btnLink} variant="link" onClick={handleNextLevel}>
            {labels.buttons.nextLevel}
          </Button>{' '}
          {labels.general.or}{' '}
          <Button className={gs.btnLink} variant="link" onClick={handleRetry}>
            {labels.buttons.retry}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Congrats;
