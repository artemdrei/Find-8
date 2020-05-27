import React from 'react';

import { IProps } from './types';

import Tutorial from '@root/containers/Tutorial';
import Win from '@root/containers/Win';
import Field from '@root/containers/Field';
import If from '@root/components/If';

import s from './styles.scss';

const Content: React.FC<IProps> = (props) => {
  const { level, hasAnswerBtn, startTime, endTime, setLevel, setStartTime, setEndTime } = props;

  return (
    <div id="content" className={s.content}>
      {/* Tutorial */}
      <If condition={startTime === 0}>
        <Tutorial setStartTime={setStartTime} />
      </If>

      {/* Win*/}
      <If condition={!!endTime}>
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
      <If condition={!!startTime && !endTime}>
        <Field level={level} hasAnswerBtn={hasAnswerBtn} startTime={startTime} setEndTime={setEndTime} />
      </If>
    </div>
  );
};

export default Content;
