import React, { useState, useEffect } from 'react';

import { IProps, TMatrix } from './types';

import { CONFIG } from '@root/config';
import { generateMatrix } from './utils/generateMatrix';
import { setSeekedValue } from './utils/setSeekedValue';

import Tutorial from '@root/containers/Tutorial';
import Win from '@root/containers/Win';

import s from './styles.scss';

let matrix: TMatrix = [];
const Field: React.FC<IProps> = (props) => {
  const { level, hasAnswerBtn, startTime, endTime, setLevel, setStartTime, setEndTime } = props;
  const [fadeIn, setFadeIn] = useState(s.fadeIn);

  useEffect(() => {
    // TODO:: refactoring later
    // Animate content on time change (browser don't animate same keyframe on rerender)
    setFadeIn(fadeIn === s.fadeIn ? s.fadeIn2 : s.fadeIn);
  }, [startTime]);

  const { rows, cells } = CONFIG.levels[level];
  const { defaultValue, seekedValue } = CONFIG.field;
  const coreMatrix = generateMatrix(rows, cells, defaultValue);
  // Use cached matrix on giveUp for preventing generated new one on rerender
  matrix = hasAnswerBtn ? matrix : setSeekedValue(coreMatrix, rows, cells, seekedValue);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hasAnswerBtn) return;

    const { content } = (e.target as HTMLDivElement).dataset;

    if (content === seekedValue.toString()) {
      console.log('SUCCESS');
      setEndTime(+new Date());
    } else {
      console.log('ERRROR');
    }
  };

  return (
    <div className={[s.field, fadeIn].join(' ')}>
      {/* Tutorial */}
      {startTime === 0 ? <Tutorial setStartTime={setStartTime} /> : null}

      {/* Win*/}
      {endTime ? (
        <div className={fadeIn}>
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
      {/* TODO: Move into component */}
      {startTime && !endTime ? (
        <div onClick={handleClick} className={fadeIn}>
          {matrix.map((row, i) => {
            return (
              <div className={s.row} key={'row' + i}>
                {row.map((val, j) => {
                  const marked = hasAnswerBtn && val === seekedValue ? s.highlighted : '';
                  return (
                    <div className={[s.cell, marked].join(' ')} key={'cell' + j} data-content={val}></div>
                  );
                })}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Field;
