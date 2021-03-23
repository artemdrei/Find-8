import React from 'react';

import s from './s.module.scss';
import UserIcon from '@root/assets/icons/user.svg';

const Avatar: React.FC = () => {
  return (
    <div className={s.avatar}>
      <UserIcon className={s.icon} />
    </div>
  );
};

export default Avatar;
