import { TMatrix } from '../containers/Field/types';

/**
 *
 * Generate field matrix
 */
export const generateMatrix = (
  numberOfRows: number,
  numberOfColumns: number,
  defaultValue: number | string
): TMatrix => {
  return new Array(numberOfColumns).fill(defaultValue).map((_) => new Array(numberOfRows).fill(defaultValue));
};
