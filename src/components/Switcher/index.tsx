import React from 'react';

import { IProps } from './types';

import s from './s.module.scss';

const Checkbox: React.FC<IProps> = ({ value, label = '', className, isChecked, isDisabled, onChange }) => {
  return (
    <label className={[s.switcher, className].join(' ')}>
      <input
        className={s.input}
        type="checkbox"
        value={value}
        checked={isChecked}
        disabled={isDisabled}
        onChange={onChange}
      />
      <span className={s.label}>{label}</span>
    </label>
  );
};

export default Checkbox;
