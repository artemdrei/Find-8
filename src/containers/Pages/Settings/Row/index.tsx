import React from 'react';

import { IProps } from './types';

import s from './s.module.scss';

const Row: React.FC<IProps> = ({ left, right }) => {
  return (
    <div className={s.row}>
      <div className={s.cell}>{left}</div>
      <div className={s.cell}>{right}</div>
    </div>
  );
};

export default Row;
