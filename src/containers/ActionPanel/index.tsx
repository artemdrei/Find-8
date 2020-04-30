import React from 'react';

import { IProps } from './types';

import Button from 'react-bootstrap/Button';
import Levels from './Levels';

import s from './styles.scss';

const ActionPanel: React.FC<IProps> = (props) => {
  const {
    startTime,
    endTime,
    hasAnswerBtn,
    level,
    toggleAnswerBtn,
    setStartTime,
    setLevel,
    setEndTime,
  } = props;

  const onPlay = () => {
    setStartTime(+new Date());
    setEndTime(0);
    toggleAnswerBtn(false);
  };

  const onGiveUp = () => {
    toggleAnswerBtn(true);
  };

  return (
    <div className={s.actionPanel}>
      {startTime && !hasAnswerBtn && !endTime ? (
        <Button className={[s.btn, s.playBtn].join(' ')} variant="primary" onClick={onGiveUp}>
          Give Up
        </Button>
      ) : (
        <Button className={[s.btn, s.playBtn].join(' ')} variant="primary" onClick={onPlay}>
          Play
        </Button>
      )}

      <div className={s.title}>Level</div>
      <Levels level={level} setLevel={setLevel} setStartTime={setStartTime} />
    </div>
  );
};

export default ActionPanel;
