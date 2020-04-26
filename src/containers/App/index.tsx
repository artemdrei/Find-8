import React, { useState } from 'react';

import Field from '@root/containers/Field';
import ActionPanel from '@root/containers/ActionPanel';
import CongratsModal from '@root/containers/Modals/Win';

import s from './styles.scss';

const App = () => {
  const [winModalIsShow, setWinModalIsShow] = useState(false);

  return (
    <div className={s.app}>
      <div className={s.container}>
        <Field onWin={() => setWinModalIsShow(true)} />
        <ActionPanel />
      </div>
      <CongratsModal isShown={winModalIsShow} onHide={() => setWinModalIsShow(false)} />
    </div>
  );
};

export default App;
