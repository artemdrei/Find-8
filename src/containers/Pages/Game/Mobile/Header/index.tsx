import React from 'react';
import { Link } from 'react-router-dom';

import { IProps } from './types';

import Select from '../Select';
import PlayButton from '@root/containers/Pages/Game/PlayButton';

import s from './s.module.scss';
import GearIcon from '@root/assets/icons/settings.svg';

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
        <Link to="/settings" className={s.settings}>
          Settings
          <GearIcon className={s.gearIcon} />
        </Link>
      </div>
    </div>
  );
};

export default MobileHeader;
