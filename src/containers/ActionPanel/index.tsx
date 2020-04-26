import React from 'react';

import { IProps } from './types';

import Button from 'react-bootstrap/Button';

import s from './styles.scss';

const ActionPanel: React.FC<IProps> = ({ setIsStarted }) => {
  return (
    <div className={s.actionPanel}>
      <Button className={s.btn} variant="primary" onClick={setIsStarted}>
        Play
      </Button>
    </div>
  );
};

export default ActionPanel;
