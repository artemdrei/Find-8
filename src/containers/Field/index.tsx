import React from 'react';

import { ROWS, CELLS, DEFAULT_VALUE, SEEKED_VALUE } from '@root/config';
import { generateMatrix } from './utils/generateMatrix';
import { setSeekedValue } from './utils/setSeekedValue';

import s from './styles.scss';

const Field = () => {
  const coreMatrix = generateMatrix(ROWS, CELLS, DEFAULT_VALUE);
  const matrix = setSeekedValue(coreMatrix, ROWS, CELLS, SEEKED_VALUE);

  return (
    <div className={s.field}>
      <div className={s.wrapper}>
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
    </div>
  );
};

export default Field;
