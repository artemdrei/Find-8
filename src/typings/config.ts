import { TLevel } from './levels';

type TField = {
  defaultValue: string | number;
  seekedValue: string | number;
};

type TLevels = {
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
