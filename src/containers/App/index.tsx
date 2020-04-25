import React from 'react';

import Field from '@root/containers/Field';

import s from './styles.scss';

const App = () => {
  return (
    <div className={s.app}>
      <div className={s.container}>
        <Field />
      </div>
    </div>
  );
};

export default App;
