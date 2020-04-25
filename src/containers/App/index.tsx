import React from 'react';

import Field from '@root/containers/Field';
import ActionPanel from '@root/containers/ActionPanel';

import s from './styles.scss';

const App = () => {
  return (
    <div className={s.app}>
      <div className={s.container}>
        <Field />
        <ActionPanel />
      </div>
    </div>
  );
};

export default App;
