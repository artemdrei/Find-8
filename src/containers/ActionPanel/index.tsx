import React from 'react';

import { IProps } from './types';

import Button from '@root/components/Button';
import Levels from './Levels';

import labels from '@root/i18n';

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
      <div className={s.mainBtn}>
        {startTime && !hasAnswerBtn && !endTime ? (
          <Button variant="primary" className={s.btn} label={labels.buttons.showAnswer} onClick={onGiveUp} />
        ) : (
          <Button variant="primary" className={s.btn} label={labels.buttons.play} onClick={onPlay} />
        )}
      </div>
      <h5 className={s.title}>{labels.general.levels}</h5>
      <Levels level={level} setLevel={setLevel} setStartTime={setStartTime} setEndTime={setEndTime} />
    </div>
  );
};

export default ActionPanel;
