import { TLevel, TField } from '@root/typings';

export type TMatrix = number[][];

export interface IProps {
  field: TField;
  level: TLevel;
  startTime: number;
  endTime: number;
  setEndTime: (date: number) => void;
}
