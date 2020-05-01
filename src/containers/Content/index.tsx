import React from 'react';

import { IProps } from './types';

import Tutorial from '@root/containers/Tutorial';
import Win from '@root/containers/Win';
import Field from '@root/containers/Field';

import s from './styles.scss';

const Content: React.FC<IProps> = (props) => {
  const { level, hasAnswerBtn, startTime, endTime, setLevel, setStartTime, setEndTime } = props;

  return (
    <div className={s.content}>
      {/* Tutorial */}
      {startTime === 0 ? <Tutorial setStartTime={setStartTime} /> : null}

      {/* Win*/}
      {endTime ? (
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
      ) : null}

      {/* Matrix field */}
      {startTime && !endTime ? (
        <Field level={level} hasAnswerBtn={hasAnswerBtn} startTime={startTime} setEndTime={setEndTime} />
      ) : null}
    </div>
  );
};

export default Content;
