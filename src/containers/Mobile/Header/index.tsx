import React from 'react';

import { IProps } from './types';

import Select from '../Select';
import PlayButton from '@root/containers/PlayButton';

import s from './s.module.scss';

const MobileHeader: React.FC<IProps> = (props) => {
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

  return (
    <div className={s.header}>
      <div className={s.wrapper}>
        <PlayButton
          startTime={startTime}
          endTime={endTime}
          hasAnswerBtn={hasAnswerBtn}
          className={s.playBtn}
          toggleAnswerBtn={toggleAnswerBtn}
          setStartTime={setStartTime}
          setEndTime={setEndTime}
        />
        <Select level={level} setLevel={setLevel} setStartTime={setStartTime} setEndTime={setEndTime} />
      </div>
    </div>
  );
};

export default MobileHeader;
