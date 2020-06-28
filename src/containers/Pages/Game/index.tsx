import React, { useState } from 'react';

import { IProps } from './types';
import { TLevel } from '@root/typings';

import { mobileCheck } from '@root/utils';

import If from '@root/components/If';
import Logo from '@root/components/Logo';
import Content from '@root/containers/Pages/Game/Content';
import ActionPanel from '@root/containers/Pages/Game/ActionPanel';
import MobileHeader from '@root/containers/Pages/Game/Mobile/Header';

import s from './styles.scss';

const Game: React.FC<IProps> = ({ field }) => {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [level, setLevel] = useState<TLevel>('easy');
  const isMobile = mobileCheck();

  return (
    <>
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
        field={field}
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
    </>
  );
};

export default Game;
