import React from 'react';

import Header from './Header';
import Language from './Language';

import s from './styles.scss';

const Settings = () => {
  return (
    <div className={s.settings}>
      <Header />
      <div className={s.container}>
        <Language />
      </div>
    </div>
  );
};

export default Settings;
