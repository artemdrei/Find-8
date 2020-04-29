import React from 'react';

import { IProps } from './types';

import Button from 'react-bootstrap/Button';
import Levels from './Levels';

import s from './styles.scss';

const ActionPanel: React.FC<IProps> = ({ endTime, level, setStartTime, setLevel, setEndTime }) => {
  const startBtnLabel = endTime === 0 ? 'Play' : 'Retry';

  const onPlay = () => {
    setStartTime(+new Date());
    setEndTime(0);
  };

  return (
    <div className={s.actionPanel}>
      <Button className={[s.btn, s.playBtn].join(' ')} variant="primary" onClick={onPlay}>
        {startBtnLabel}
      </Button>
      <div className={s.title}>Level</div>
      <Levels level={level} setLevel={setLevel} />
    </div>
  );
};

export default ActionPanel;
