import React, { useContext } from 'react';

import { IProps } from './types';
import { TLevel } from '@root/typings';
import { CONFIG } from '@root/config';

import RadioButton from '@root/components/RadioButton';

import { I18nContext } from '@root/i18n';

import s from './styles.scss';

const Level: React.FC<IProps> = ({ level: selectedLevel, setLevel, setStartTime, setEndTime }) => {
  const { labels } = useContext(I18nContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            name="levels"
            value={level}
            label={labels.levels[level as TLevel]}
            isChecked={level === selectedLevel}
            onChange={handleChange}
          />
        );
      })}
    </fieldset>
  );
};

export default Level;
