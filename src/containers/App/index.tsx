import React, { useState, useEffect } from 'react';

import { TLevel } from '@root/typings';

import { mobileCheck } from '@root/utils';

import Content from '@root/containers/Content';
import ActionPanel from '@root/containers/ActionPanel';
import Logo from '@root/components/Logo';
import MobileHeader from '../Mobile/Header';

import s from './styles.scss';
import If from '@root/components/If';

const App = () => {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [hasAnswerBtn, toggleAnswerBtn] = useState(false);
  const [level, setLevel] = useState<TLevel>('easy');
  const isMobile = mobileCheck();
  const idIsMobile = isMobile ? 'isMobile' : '';

  useEffect(() => {
    setEndTime(0);
  }, [startTime]);

  useEffect(() => {
    toggleAnswerBtn(false);
  }, [level]);

  return (
    <div id={idIsMobile} className={s.game}>
      <Logo className={s.logo} />
      <If condition={isMobile}>
        <MobileHeader
          level={level}
          hasAnswerBtn={hasAnswerBtn}
          startTime={startTime}
          endTime={endTime}
          setStartTime={setStartTime}
          setEndTime={setEndTime}
          toggleAnswerBtn={toggleAnswerBtn}
          setLevel={setLevel}
        />
      </If>
      <Content
        level={level}
        hasAnswerBtn={hasAnswerBtn}
        startTime={startTime}
        endTime={endTime}
        setLevel={setLevel}
        setStartTime={setStartTime}
        setEndTime={setEndTime}
      />
      <If condition={!isMobile}>
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
      </If>
    </div>
  );
};

export default App;
