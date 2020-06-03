import React from 'react';

import { IProps } from './types';

import Button from '@root/components/Button';

import labels from '@root/i18n';

const PlayButton: React.FC<IProps> = (props) => {
  const { startTime, endTime, className, setStartTime, setEndTime } = props;
  const btnClassName = className ? className : '';

  const onPlay = () => {
    setStartTime(+new Date());
    setEndTime(0);
  };

  const onGiveUp = () => {
    setEndTime(startTime);
  };

  return (
    <>
      {startTime && !endTime ? (
        <Button
          variant="primary"
          label={labels.buttons.showAnswer}
          className={btnClassName}
          onClick={onGiveUp}
        />
      ) : (
        <Button variant="primary" label={labels.buttons.play} className={btnClassName} onClick={onPlay} />
      )}
    </>
  );
};

export default PlayButton;
