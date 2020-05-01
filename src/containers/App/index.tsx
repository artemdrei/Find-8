import React, { useState, useEffect } from 'react';

import { TLevel } from '@root/typings';

import Content from '@root/containers/Content';
import ActionPanel from '@root/containers/ActionPanel';
import QuickClick from '@root/containers/Toasts/QuickClick';

import s from './styles.scss';

const App = () => {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [hasAnswerBtn, toggleAnswerBtn] = useState(false);
  const [level, setLevel] = useState<TLevel>('easy');
  const [hasQuickClickToast, toggleQuickClickToast] = useState(false);

  useEffect(() => {
    setEndTime(0);
  }, [startTime]);

  useEffect(() => {
    toggleAnswerBtn(false);
  }, [level]);

  return (
    <>
      <div className={s.container}>
        <Content
          level={level}
          hasAnswerBtn={hasAnswerBtn}
          startTime={startTime}
          endTime={endTime}
          setLevel={setLevel}
          setStartTime={setStartTime}
          setEndTime={setEndTime}
          toggleQuickClickToast={toggleQuickClickToast}
        />
        <ActionPanel
          level={level}
          hasAnswerBtn={hasAnswerBtn}
          startTime={startTime}
          endTime={endTime}
          setStartTime={setStartTime}
          setEndTime={setEndTime}
          toggleAnswerBtn={toggleAnswerBtn}
          setLevel={setLevel}
        />
      </div>
      <div className={s.toastsWrapper}>
        <QuickClick isShown={hasQuickClickToast} toggleIsShown={toggleQuickClickToast} />
      </div>
    </>
  );
};

export default App;
