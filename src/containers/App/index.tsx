import React, { useState, useEffect } from 'react';

import { usePrevious } from './hooks/usePrevious';

import Field from '@root/containers/Field';
import ActionPanel from '@root/containers/ActionPanel';
import CongratsModal from '@root/containers/Modals/Win';

import s from './styles.scss';

const App = () => {
  const [time, setTime] = useState(0);
  const [seekDuration, setSeekDuration] = useState(0);
  const [winModalIsShown, setWinModalIsShown] = useState(false);

  let prevTime = usePrevious(time);

  useEffect(() => {
    if (time) {
      const duration = time - prevTime;
      setSeekDuration(duration);
    }
  }, [time]);

  // Reset on close Win modal
  useEffect(() => {
    if (winModalIsShown === false) {
      prevTime = 0;
      setTime(0);
      setSeekDuration(0);
    }
  }, [winModalIsShown]);

  const onWin = () => {
    setTime(+new Date());
    setWinModalIsShown(true);
  };

  return (
    <>
      <div className={s.container}>
        <Field
          isStarted={time === 0 ? null : !!time}
          setTime={(date: number) => setTime(date)}
          onWin={onWin}
        />
        <ActionPanel time={time} setTime={(time: number) => setTime(time)} />
      </div>
      <CongratsModal
        isShown={winModalIsShown}
        seekDuration={seekDuration}
        onHide={() => setWinModalIsShown(false)}
      />
    </>
  );
};

export default App;
