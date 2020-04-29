import React, { useState, useEffect } from 'react';

import { TLevel } from '@root/typings';

import Field from '@root/containers/Field';
import ActionPanel from '@root/containers/ActionPanel';

import s from './styles.scss';

const App = () => {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [level, setLevel] = useState<TLevel>('easy');

  // Set startTime and reset other params
  useEffect(() => {
    setEndTime(0);
  }, [startTime]);

  useEffect(() => {
    setStartTime(+new Date());
  }, [level]);

  return (
    <>
      <div className={s.container}>
        <Field
          level={level}
          startTime={startTime}
          endTime={endTime}
          setLevel={setLevel}
          setStartTime={(date: number) => setStartTime(date)}
          setEndTime={(date: number) => setEndTime(date)}
        />
        <ActionPanel
          level={level}
          endTime={endTime}
          setStartTime={(time: number) => setStartTime(time)}
          setEndTime={(date: number) => setEndTime(date)}
          setLevel={setLevel}
        />
      </div>
    </>
  );
};

export default App;
