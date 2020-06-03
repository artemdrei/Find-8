import React from 'react';

import { IProps } from './types';

import s from './s.module.scss';

const RadioButton: React.FC<IProps> = (props) => {
  const { id, name, value, label, className = '', isChecked, isDisabled, onChange } = props;

  return (
    <label htmlFor={id} className={[s.radioButton, className].join(' ')}>
      <input
        id={id}
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
