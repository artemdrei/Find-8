import React from 'react';

import { IProps } from './types';
import { TLevel } from '@root/typings';
import { CONFIG } from '@root/config';

import RadioButton from '@root/components/RadioButton';

import labels from '@root/i18n';

import s from './styles.scss';

const Level: React.FC<IProps> = ({ level: selectedLevel, setLevel, setStartTime, setEndTime }) => {
  console.log('selectedLevel:', selectedLevel);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('change');
    const level = e.target.value as TLevel;
    setLevel(level);
    setStartTime(+new Date());
    setEndTime(0);
  };

  return (
    <fieldset className={s.radioGroup}>
      <legend>{labels.levels.fieldset}</legend>
      {Object.keys(CONFIG.levels).map((level) => {
        return (
          <RadioButton
            key={level}
            id={level}
            name="levels"
            value={level}
            label={level}
            isChecked={level === selectedLevel}
            onChange={handleChange}
          />
        );
      })}
    </fieldset>
  );
};

export default Level;
