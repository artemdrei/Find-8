import { TMatrix } from '../types';

import { getRandomInt } from '@root/utils';

/**
 *
 * Set seeked value in random cell
 */
export const setSeekedValue = (
  matrix: TMatrix,
  rows: number,
  columns: number,
  seekedValue: number | string
): TMatrix => {
  const x = getRandomInt(0, rows);
  const y = getRandomInt(0, columns);

  const matrixCopy = JSON.parse(JSON.stringify(matrix));
  matrixCopy[x][y] = seekedValue;

  return matrixCopy;
};
