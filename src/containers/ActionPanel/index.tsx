import React from 'react';

import { IProps } from './types';

import Button from 'react-bootstrap/Button';

import s from './styles.scss';

const ActionPanel: React.FC<IProps> = ({ isStarted, setIsStarted }) => {
  const startBtnLabel = isStarted ? 'Reset' : 'Play';
  return (
    <div className={s.actionPanel}>
      <Button className={s.btn} variant="primary" onClick={setIsStarted}>
        {startBtnLabel}
      </Button>
    </div>
  );
};

export default ActionPanel;
