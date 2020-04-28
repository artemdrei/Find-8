import React from 'react';

import { IProps } from './types';

import { CONFIG } from '@root/config';
import { generateMatrix } from './utils/generateMatrix';
import { setSeekedValue } from './utils/setSeekedValue';

import Tutorial from '@root/containers/Tutorial';
import Win from '@root/containers/Win';

import s from './styles.scss';

const Field: React.FC<IProps> = ({
  level,
  time,
  seekDuration,
  setTime,
  setLevel,
  setSeekDuration,
  onWin,
}) => {
  const { rows, cells } = CONFIG.levels[level];
  const { defaultValue, seekedValue } = CONFIG.field;
  const coreMatrix = generateMatrix(rows, cells, defaultValue);
  const matrix = setSeekedValue(coreMatrix, rows, cells, seekedValue);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { content } = (e.target as HTMLDivElement).dataset;

    if (content === seekedValue.toString()) {
      console.log('SUCCESS');
      onWin();
    } else {
      console.log('ERRROR');
    }
  };

  return (
    <div className={s.field}>
      {/* Win Page*/}
      {seekDuration ? (
        <div className={s.fadeIn}>
          <Win
            seekDuration={seekDuration}
            level={level}
            setLevel={setLevel}
            setTime={setTime}
            setSeekDuration={setSeekDuration}
          />
        </div>
      ) : null}

      {/* Tutorial page */}
      {time === 0 && !seekDuration ? <Tutorial setTime={setTime} /> : null}

      {/* Matrix page */}
      {time ? (
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
