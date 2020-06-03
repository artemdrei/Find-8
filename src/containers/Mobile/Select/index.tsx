import React from 'react';

import { CONFIG } from '@root/config';

import { IProps } from './types';
import { TLevel } from '@root/typings';

import { capitalizeFirstLetter } from '@root/utils';

import s from './s.module.scss';

const Levels: React.FC<IProps> = ({ setLevel, setStartTime, setEndTime }) => {
  const handleChange = (e: any) => {
    const level = e.target.value as TLevel;
    setLevel(level);
    setStartTime(+new Date());
    setEndTime(0);
  };

  return (
    <div className={s.selectWrapper}>
      <label className={s.label}>Select Level</label>
      <select name="level" aria-labelledby="levels" className={s.select} onChange={handleChange}>
        {Object.keys(CONFIG.levels).map((level) => {
          return (
            <option key={level} value={level}>
              {capitalizeFirstLetter(level)}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Levels;
