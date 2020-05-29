import React from 'react';

import { CONFIG } from '@root/config';

import { IProps } from './types';
import { TScore } from '@root/typings';
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

  const score: TScore = JSON.parse(localStorage.getItem('find8') as string);
  const noInsanityLevel = !score || !score.ninja;

  return (
    <div className={s.selectWrapper}>
      <select name="level" className={s.select} onChange={handleChange}>
        {Object.keys(CONFIG.levels).map((level) => {
          if (noInsanityLevel && level === 'insanity') return null;

          return (
            <option key={level} value={level}>
              {capitalizeFirstLetter(level)}
            </option>
          );
        })}
      </select>
      {/* <ArrowIcon className={s.arrow} /> */}
    </div>
  );
};

export default Levels;
