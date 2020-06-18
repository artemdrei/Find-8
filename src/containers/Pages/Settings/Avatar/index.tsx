import React, { useState, useEffect } from 'react';

import { IProps } from './types';

import { getRandomInt } from '@root/utils/getRandomInt';

const Avatar: React.FC<IProps> = ({ alt, className }) => {
  const [randomInt, setRandomInt] = useState(0);

  useEffect(() => {
    setRandomInt(getRandomInt(0, 100));
  }, []);

  return (
    <>
      {randomInt ? (
        <img src={`https://api.adorable.io/avatars/200/${randomInt}`} className={className} alt={alt} />
      ) : null}
    </>
  );
};

export default Avatar;
