import React from 'react';

import { IProps } from './types';

const Avatar: React.FC<IProps> = ({ alt, className }) => {
  return <img src="/src/assets/images/avatar.jpeg" className={className} alt={alt} />;
};

export default Avatar;
