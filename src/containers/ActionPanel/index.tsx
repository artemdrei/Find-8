import React from 'react';

import { IProps } from './types';

import Levels from './Levels';
import PlayButton from '@root/containers/PlayButton';

import labels from '@root/i18n';

import s from './styles.scss';

const ActionPanel: React.FC<IProps> = (props) => {
  const { startTime, endTime, level, setStartTime, setLevel, setEndTime } = props;

  return (
    <div className={s.actionPanel}>
      <div className={s.playBtn}>
        <PlayButton
          startTime={startTime}
          endTime={endTime}
          setStartTime={setStartTime}
          setEndTime={setEndTime}
        />
      </div>
      <h3 className={s.title}>{labels.general.levels}</h3>
      <Levels level={level} setLevel={setLevel} setStartTime={setStartTime} setEndTime={setEndTime} />
    </div>
  );
};

export default ActionPanel;
