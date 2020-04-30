import React from 'react';

import { IProps } from './types';

import s from './styles.scss';

const Logo: React.FC<IProps> = ({ className = '' }) => {
  return (
    <h1 className={[s.logo, className].join(' ')}>
      <span className={s.find}>find</span>
      <span className={s.eight}>8</span>
    </h1>
  );
};

export default Logo;
