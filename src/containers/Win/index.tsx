import React from 'react';

import { TLevel } from '@root/typings';
import { IProps } from './types';

import { CONFIG } from '@root/config';

import Button from 'react-bootstrap/Button';

import gs from '@root/assets/styles/index.scss';

// TODO:: move duration counter in separate function
const Congrats: React.FC<IProps> = ({ startTime, endTime, level, setLevel, setStartTime, setEndTime }) => {
  const seekDuration = endTime - startTime;
  const minutes = Math.floor(seekDuration / 60000);
  const seconds = +((seekDuration % 60000) / 1000).toFixed(2);
  const time = minutes
    ? seconds == 60
      ? minutes + 1 + ':00'
      : minutes + ':' + (seconds < 10 ? '0' : '') + seconds
    : seconds;
  const label = minutes ? (minutes > 2 ? 'minutes' : 'minutes') : seconds > 1 ? 'seconds' : 'second';

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
      <p>
        You have finished {level} level in{' '}
        <b>
          {time} {label}
        </b>
      </p>
      <p>
        Challenge yourself with{' '}
        <Button className={gs.btnLink} variant="link" onClick={handleNextLevel}>
          Next Level
        </Button>{' '}
        or{' '}
        <Button className={gs.btnLink} variant="link" onClick={handleRetry}>
          Retry
        </Button>
      </p>
    </div>
  );
};

export default Congrats;
