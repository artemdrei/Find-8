import React from 'react';

import { CONFIG } from '@root/config';

import { IProps } from './types';
import { TLevel } from '@root/typings';

import { capitalizeFirstLetter } from '@root/utils';

import Select from '@root/components/Select';

import s from './s.module.scss';

const Levels: React.FC<IProps> = ({ setLevel, setStartTime, setEndTime }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const level = e.target.value as TLevel;
    setLevel(level);
    setStartTime(+new Date());
    setEndTime(0);
  };
  const data = Object.keys(CONFIG.levels).map((key) => ({ label: capitalizeFirstLetter(key), value: key }));

  return (
    <div className={s.selectWrapper}>
      <Select name="level" ariaLabel="level" className={s.mobile} data={data} onChange={handleChange} />
    </div>
  );
};

export default Levels;
