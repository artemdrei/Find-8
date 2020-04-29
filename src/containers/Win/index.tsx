import React from 'react';

import { TLevel } from '@root/typings';
import { IProps } from './types';

import { CONFIG } from '@root/config';

import Button from 'react-bootstrap/Button';

import { getSeekDuration } from './utils/getSeekDuration';

import gs from '@root/assets/styles/index.scss';

const Congrats: React.FC<IProps> = ({ startTime, endTime, level, setLevel, setStartTime, setEndTime }) => {
  const { time, units } = getSeekDuration(startTime, endTime);

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
      <h1>🎉 Congratulation!</h1>
      <div>
        You have finished {level} level in{' '}
        <b>
          {time} {units}
        </b>
      </div>
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
