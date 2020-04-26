import React from 'react';

import { IProps } from './types';

import { ROWS, CELLS, DEFAULT_VALUE, SEEKED_VALUE } from '@root/config';
import { generateMatrix } from './utils/generateMatrix';
import { setSeekedValue } from './utils/setSeekedValue';

import Tutorial from '@root/containers/Tutorial';

import s from './styles.scss';

const Field: React.FC<IProps> = ({ isStarted, setIsStarted, onWin }) => {
  const coreMatrix = generateMatrix(ROWS, CELLS, DEFAULT_VALUE);
  const matrix = setSeekedValue(coreMatrix, ROWS, CELLS, SEEKED_VALUE);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { content } = (e.target as HTMLDivElement).dataset;

    if (content === SEEKED_VALUE.toString()) {
      console.log('SUCCESS');
      onWin();
    } else {
      console.log('ERRROR');
    }
  };

  return (
    <div className={s.field}>
      {isStarted === null ? (
        <Tutorial setIsStarted={setIsStarted} />
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
