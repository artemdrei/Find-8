import React, { useState, useEffect } from 'react';

import { usePrevious } from './hooks/usePrevious';

import { TLevel } from '@root/typings';

import Field from '@root/containers/Field';
import ActionPanel from '@root/containers/ActionPanel';

import s from './styles.scss';

const App = () => {
  const [time, setTime] = useState(0);
  const [seekDuration, setSeekDuration] = useState(0);
  const [level, setLevel] = useState<TLevel>('easy');

  let prevTime = usePrevious(time);

  // Set seek duration and reset starting time
  useEffect(() => {
    if (time && prevTime) {
      const duration = time - prevTime;
      setSeekDuration(duration);
      setTime(0);
    }
  }, [time]);

  const onWin = () => {
    setTime(+new Date());
  };

  return (
    <>
      <div className={s.container}>
        <Field
          time={time}
          level={level}
          seekDuration={seekDuration}
          setLevel={setLevel}
          setSeekDuration={setSeekDuration}
          setTime={(date: number) => setTime(date)}
          onWin={onWin}
        />
        <ActionPanel
          level={level}
          time={time}
          setTime={(time: number) => setTime(time)}
          setLevel={setLevel}
        />
      </div>
    </>
  );
};

export default App;
