import React from 'react';

import { IProps } from './types';

const If: React.FC<IProps> = ({ condition = false, children = null }) => {
  return <>{!!condition ? children : null}</>;
};
export default If;
