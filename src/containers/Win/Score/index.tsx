import React from 'react';

import { IProps } from './types';

import { getSeekDuration } from '../utils/getSeekDuration';

import labels from '@root/i18n';

import s from './styles.scss';
import MedalIcon from '@root/assets/icons/medal.svg';
import CheckIcon from '@root/assets/icons/check.svg';

const Score: React.FC<IProps> = ({ startTime, endTime, level }) => {
  const score = JSON.parse(localStorage.getItem('find8') as string);
  const { time, units } = getSeekDuration(startTime, endTime);
  const bestResult = score[level] ? getSeekDuration(score[level].startTime, score[level].endTime) : null;

  return (
    <>
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
    </>
  );
};

export default Score;
