import React, { useState } from 'react';

import { IProps } from './types';

import Tutorial from '@root/containers/Tutorial';
import Win from '@root/containers/Win';
import Field from '@root/containers/Field';

import s from './styles.scss';

const Content: React.FC<IProps> = (props) => {
  const {
    level,
    hasAnswerBtn,
    startTime,
    endTime,
    setLevel,
    setStartTime,
    setEndTime,
    toggleQuickClickToast,
  } = props;

  const [clickTime, setClickTime] = useState<number[]>([]);

  const handleClick = () => {
    if (clickTime.length === 3) {
      const start = clickTime[0];
      const end = clickTime[clickTime.length - 1];

      // Fast clicking
      if (end - start <= 1000) {
        toggleQuickClickToast(true);
      }
      setClickTime([]);
    } else {
      setClickTime([...clickTime, +new Date()]);
    }
  };

  return (
    <div className={s.content} data-id="content">
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
        <div onClick={handleClick}>
          <Field level={level} hasAnswerBtn={hasAnswerBtn} startTime={startTime} setEndTime={setEndTime} />
        </div>
      ) : null}
    </div>
  );
};

export default Content;
