import React, { useState } from 'react';

import Field from '@root/containers/Field';
import ActionPanel from '@root/containers/ActionPanel';
import CongratsModal from '@root/containers/Modals/Win';

import s from './styles.scss';

const App = () => {
  const [winModalIsShown, setWinModalIsShown] = useState(false);
  const [isStarted, setIsStarted] = useState<null | boolean>(null);

  return (
    <>
      <div className={s.container}>
        <Field
          isStarted={isStarted}
          setIsStarted={() => setIsStarted(true)}
          onWin={() => setWinModalIsShown(true)}
        />
        <ActionPanel isStarted={isStarted} setIsStarted={() => setIsStarted(!isStarted)} />
      </div>
      <CongratsModal isShown={winModalIsShown} onHide={() => setWinModalIsShown(false)} />
    </>
  );
};

export default App;
