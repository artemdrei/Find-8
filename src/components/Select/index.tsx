import React from 'react';

import { IProps } from './types';

import s from './s.module.scss';

const Levels: React.FC<IProps> = ({ name, ariaLabel, variant = '', className, data, onChange }) => {
  return (
    <div>
      <label className={s.label} id={ariaLabel}>
        {ariaLabel}
      </label>
      <select
        name={name}
        aria-labelledby={ariaLabel}
        className={[s.select, s[variant], className].join(' ').trim()}
        onChange={onChange}
      >
        {data.map(({ value, label }, i) => {
          return (
            <option key={value + i} value={value}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Levels;
