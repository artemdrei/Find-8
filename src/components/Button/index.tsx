import React from 'react';

import { IProps, TBtnVariant } from './types';

import s from './s.module.scss';

const getBtnVariants = (variants: TBtnVariant | TBtnVariant[]): string => {
  let result = '';

  if (typeof variants === 'string') {
    result = s[variants];
  } else if (Array.isArray(variants) && variants.length) {
    variants.forEach((v) => {
      result += ` ${s[v]}`;
    });
  }

  return result;
};

const Button: React.FC<IProps> = (props) => {
  const {
    label,
    children,
    isDisabled,
    className,
    size,
    variant = 'primary',
    onClick,
    onMouseUp,
    onMouseDown,
  } = props;

  const btnVariants = getBtnVariants(variant);
  const btnSize = size ? s[size] : '';
  const classNames = [s.btn, btnVariants, btnSize, className].join(' ').trim();

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
