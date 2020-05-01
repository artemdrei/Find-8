import { TMatrix } from '../containers/Field/types';

/**
 *
 * Generate field matrix
 */
export const generateMatrix = (rows: number, cell: number, defaultValue: number | string): TMatrix => {
  return new Array(rows).fill(defaultValue).map((_) => new Array(cell).fill(defaultValue));
};
