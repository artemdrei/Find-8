import React from 'react';

import { IProps } from './types';

import Button from 'react-bootstrap/Button';

import s from './styles.scss';

const ActionPanel: React.FC<IProps> = ({ time, setTime }) => {
  const startBtnLabel = time ? 'Reset' : 'Play';

  const onPlay = () => {
    setTime(+new Date());
  };

  return (
    <div className={s.actionPanel}>
      <Button className={s.btn} variant="primary" onClick={onPlay}>
        {startBtnLabel}
      </Button>
    </div>
  );
};

export default ActionPanel;
