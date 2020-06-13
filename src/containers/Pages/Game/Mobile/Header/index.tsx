import React from 'react';

import { IProps } from './types';

import Select from '../Select';
import PlayButton from '@root/containers/Pages/Game/PlayButton';

import s from './s.module.scss';

const MobileHeader: React.FC<IProps> = (props) => {
  const { startTime, endTime, level, setStartTime, setLevel, setEndTime } = props;

  return (
    <div className={s.header}>
      <div className={s.wrapper}>
        <PlayButton
          startTime={startTime}
          endTime={endTime}
          className={s.playBtn}
          setStartTime={setStartTime}
          setEndTime={setEndTime}
        />
        <Select level={level} setLevel={setLevel} setStartTime={setStartTime} setEndTime={setEndTime} />
      </div>
    </div>
  );
};

export default MobileHeader;
