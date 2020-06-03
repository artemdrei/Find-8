import { TLevel } from '@root/typings';

export type TMatrix = number[][];

export interface IProps {
  level: TLevel;
  startTime: number;
  endTime: number;
  setEndTime: (date: number) => void;
}
