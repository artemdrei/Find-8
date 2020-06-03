import React from 'react';

import { IProps } from './types';

import s from './s.module.scss';

const RadioButton: React.FC<IProps> = (props) => {
  const { name, value, label, className = '', isChecked, isDisabled, onChange } = props;

  return (
    <label className={[s.radioButton, className].join(' ')}>
      <input
        name={name}
        type="radio"
        value={value}
        checked={isChecked}
        disabled={isDisabled}
        onChange={onChange}
      />
      <span className={s.label}>{label}</span>
    </label>
  );
};

export default RadioButton;
