import React from 'react';

import { TLevel } from '@root/typings';
import { IProps } from './types';

import { CONFIG } from '@root/config';

import { getRandomWord } from '@root/utils';
import { getSeekDuration } from './utils/getSeekDuration';

import Score from './Score';
import PlayAgain from './PlayAgain';

import labels from '@root/i18n';

import s from './styles.scss';

const Congrats: React.FC<IProps> = ({ startTime, endTime, level, setLevel, setStartTime, setEndTime }) => {
  const result = JSON.parse(localStorage.getItem('find8') as string);
  const { time } = getSeekDuration(startTime, endTime);
  const bestResult = getSeekDuration(result[level].startTime, result[level].endTime);
  const hasBeatRecord = time === bestResult.time;
  const title = hasBeatRecord ? labels.win.newRecord : getRandomWord(labels.win.title);

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

  return (
    <section>
      <h2 className={s.title}>{title}</h2>
      <div className={s.content}>
        <Score startTime={startTime} endTime={endTime} bestResult={bestResult} />
        <PlayAgain level={level} handleNextLevel={handleNextLevel} handleRetry={handleRetry} />
      </div>
    </section>
  );
};

export default Congrats;
