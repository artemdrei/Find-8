import React from 'react';

import { TLevel } from '@root/typings';
import { IProps } from './types';

import { CONFIG } from '@root/config';

import Logo from '@root/components/Logo';
import Score from './Score';
import PlayAgain from './PlayAgain';

import { getRandomWord } from '@root/utils';

import labels from '@root/i18n';

import s from './styles.scss';

const Congrats: React.FC<IProps> = ({ startTime, endTime, level, setLevel, setStartTime, setEndTime }) => {
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
      <h3 className={s.title}>{title}</h3>
      <div className={s.content}>
        <Score level={level} startTime={startTime} endTime={endTime} />
        <PlayAgain level={level} handleNextLevel={handleNextLevel} handleRetry={handleRetry} />
      </div>
    </div>
  );
};

export default Congrats;
