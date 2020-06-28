import React from 'react';

import { IProps } from './types';

import Tutorial from '@root/containers/Pages/Game/Tutorial';
import Win from '@root/containers/Pages/Game/Win';
import Field from '@root/containers/Pages/Game/Field';
import If from '@root/components/If';

import s from './styles.scss';

const Content: React.FC<IProps> = (props) => {
  const { level, startTime, endTime, field, setLevel, setStartTime, setEndTime } = props;
  const notStarted = startTime === 0;
  const isFinished = endTime > 0;
  const isGiveUp = startTime === endTime;

  return (
    <div id="content" className={s.content}>
      {/* Tutorial */}
      <If condition={notStarted}>
        <Tutorial setStartTime={setStartTime} />
      </If>

      {/* Win*/}
      <If condition={isFinished && !isGiveUp}>
        <div className={s.fadeIn}>
          <Win
            level={level}
            startTime={startTime}
            endTime={endTime}
            setLevel={setLevel}
            setStartTime={setStartTime}
            setEndTime={setEndTime}
          />
        </div>
      </If>

      {/* Matrix field */}
      <If condition={!isFinished || isGiveUp}>
        <Field field={field} level={level} startTime={startTime} endTime={endTime} setEndTime={setEndTime} />
      </If>
    </div>
  );
};

export default Content;
