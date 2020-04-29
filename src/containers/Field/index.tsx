import React, { useState, useEffect } from 'react';

import { IProps } from './types';

import { CONFIG } from '@root/config';
import { generateMatrix } from './utils/generateMatrix';
import { setSeekedValue } from './utils/setSeekedValue';

import Tutorial from '@root/containers/Tutorial';
import Win from '@root/containers/Win';

import s from './styles.scss';

let initialStartTime = 0;
const Field: React.FC<IProps> = ({ level, startTime, endTime, setLevel, setStartTime, setEndTime }) => {
  const [showTutorial, setShowTutorial] = useState(false);

  // TODO:: refactoring later
  useEffect(() => {
    if (initialStartTime === 0) {
      setShowTutorial(true);
      initialStartTime = startTime;
    } else {
      setShowTutorial(false);
    }
  }, [startTime]);

  const { rows, cells } = CONFIG.levels[level];
  const { defaultValue, seekedValue } = CONFIG.field;
  const coreMatrix = generateMatrix(rows, cells, defaultValue);
  const matrix = setSeekedValue(coreMatrix, rows, cells, seekedValue);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { content } = (e.target as HTMLDivElement).dataset;

    if (content === seekedValue.toString()) {
      console.log('SUCCESS');
      setEndTime(+new Date());
    } else {
      console.log('ERRROR');
    }
  };

  return (
    <div className={s.field}>
      {/* Tutorial */}
      {showTutorial ? <Tutorial setStartTime={setStartTime} /> : null}

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
      {/* TODO: Move into component */}
      {!showTutorial && startTime && !endTime ? (
        <div onClick={handleClick}>
          {matrix.map((row, i) => {
            return (
              <div className={s.row} key={'row' + i}>
                {row.map((num: number, j) => (
                  <div className={s.cell} key={'cell' + j} data-content={num}></div>
                ))}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Field;
