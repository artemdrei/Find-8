import React from 'react';

import { IProps } from './types';
import { TScore } from '@root/typings';
import { CONFIG } from '@root/config';

import { TLevel } from '@root/typings';

import s from './styles.scss';

const Level: React.FC<IProps> = ({ level: selectedLevel, setLevel, setStartTime, setEndTime }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const level = e.target.value as TLevel;
    setLevel(level);
    setStartTime(+new Date());
    setEndTime(0);
  };

  const score: TScore = JSON.parse(localStorage.getItem('find8') as string);
  const noInsanityLevel = !score || !score.ninja;

  return (
    <div className={s.radioGroup}>
      {Object.keys(CONFIG.levels).map((level) => {
        if (noInsanityLevel && level === 'insanity') return null;
        // const animationClassName = level === 'insanity' ? s.animate : ''; // TODO
        return (
          <div className={s.radioButton} key={level}>
            <input
              type="radio"
              name="levels"
              id={level}
              value={level}
              checked={level === selectedLevel}
              onChange={handleChange}
            />
            <label htmlFor={level}>{level}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Level;
