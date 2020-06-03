import React, { useState } from 'react';

import { TLevel } from '@root/typings';

import { mobileCheck } from '@root/utils';

import Content from '@root/containers/Content';
import ActionPanel from '@root/containers/ActionPanel';
import Logo from '@root/components/Logo';
import If from '@root/components/If';
import MobileHeader from '../Mobile/Header';

import s from './styles.scss';

const App = () => {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [level, setLevel] = useState<TLevel>('easy');
  const isMobile = mobileCheck();
  const platformId = isMobile ? 'isMobile' : 'isDesktop';

  return (
    <main id={platformId} className={s.game}>
      <Logo className={s.logoPosition} />
      <If condition={isMobile}>
        <MobileHeader
          level={level}
          startTime={startTime}
          endTime={endTime}
          setStartTime={setStartTime}
          setEndTime={setEndTime}
          setLevel={setLevel}
        />
      </If>
      <Content
        level={level}
        startTime={startTime}
        endTime={endTime}
        setLevel={setLevel}
        setStartTime={setStartTime}
        setEndTime={setEndTime}
      />
      <If condition={!isMobile}>
        <ActionPanel
          level={level}
          startTime={startTime}
          endTime={endTime}
          setStartTime={setStartTime}
          setEndTime={setEndTime}
          setLevel={setLevel}
        />
      </If>
    </main>
  );
};

export default App;
