import { TLevel } from '@root/typings';

export type TMatrix = number[][];

export interface IProps {
  level: TLevel;
  endTime: number;
  startTime: number;
  setLevel: (level: TLevel) => void;
  setStartTime: (date: number) => void;
  setEndTime: (date: number) => void;
}
