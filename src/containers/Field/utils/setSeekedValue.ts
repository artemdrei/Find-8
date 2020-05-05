import { TMatrix } from '../types';

import { getRandomInt } from '@root/utils';

/**
 *
 * Set seeked value in random cell
 */
export const setSeekedValue = (
  matrix: TMatrix,
  numberOfRows: number,
  numberOfColumns: number,
  seekedValue: number | string
): TMatrix => {
  const rowIndex = getRandomInt(0, numberOfRows);
  const columnIndex = getRandomInt(0, numberOfColumns);

  const matrixCopy = JSON.parse(JSON.stringify(matrix));
  matrixCopy[columnIndex][rowIndex] = seekedValue;

  return matrixCopy;
};
