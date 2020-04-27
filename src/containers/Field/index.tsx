import React from 'react';

import { IProps } from './types';

import { CONFIG } from '@root/config';
import { generateMatrix } from './utils/generateMatrix';
import { setSeekedValue } from './utils/setSeekedValue';

import Tutorial from '@root/containers/Tutorial';

import s from './styles.scss';

const Field: React.FC<IProps> = ({ isStarted, level, setTime, onWin }) => {
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
      {isStarted === null ? (
        <Tutorial setTime={setTime} />
      ) : (
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
      )}
    </div>
  );
};

export default Field;
