import { TLevel } from './levels';

export type TField = {
  defaultValue: string | number;
  seekedValue: string | number;
  cellSize: number;
};

export type TLevels = {
  [key in TLevel]: {
    label: string;
    rows: number;
    columns: number;
    nextLevel: string;
  };
};
export interface TConfig {
  field: TField;
  levels: TLevels;
}
