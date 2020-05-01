import React from 'react';

import { TLevel } from '@root/typings';
import { IProps } from './types';

import { CONFIG } from '@root/config';

import Button from 'react-bootstrap/Button';
import Logo from '@root/components/Logo';

import { getSeekDuration } from './utils/getSeekDuration';

import s from './styles.scss';
import gs from '@root/assets/styles/index.scss';

const Congrats: React.FC<IProps> = ({ startTime, endTime, level, setLevel, setStartTime, setEndTime }) => {
  const { time, units } = getSeekDuration(startTime, endTime);
  const score = JSON.parse(localStorage.getItem('find8') as string);
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

  return (
    <div>
      <Logo className={s.logoTop} />
      <h3 className={s.title}>Congratulations!</h3>
      <div>
        You have finished {level} level in{' '}
        <b>
          {time} {units}
        </b>
      </div>
      {bestResult ? (
        <div>
          Your best score for {level} level:
          <b>
            {bestResult.time} {bestResult.units}
          </b>
        </div>
      ) : null}
      <div>
        Challenge yourself with{' '}
        <Button className={gs.btnLink} variant="link" onClick={handleNextLevel}>
          Next Level
        </Button>{' '}
        or{' '}
        <Button className={gs.btnLink} variant="link" onClick={handleRetry}>
          Retry
        </Button>
      </div>
    </div>
  );
};

export default Congrats;
