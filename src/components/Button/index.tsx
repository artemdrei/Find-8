import React from 'react';

import { IProps } from './types';

import s from './s.module.scss';

const Button: React.FC<IProps> = (props) => {
  const { label, children, isDisabled, className, onClick, onMouseUp, onMouseDown, variant, size } = props;
  const btnVariant = variant ? s[variant] : '';
  const btnSize = size ? s[size] : '';
  const classNames = [s.btn, btnVariant, btnSize, className].join(' ');

  return (
    <button
      className={classNames}
      disabled={isDisabled}
      onClick={onClick}
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
    >
      {children}
      {label}
    </button>
  );
};

export default Button;
