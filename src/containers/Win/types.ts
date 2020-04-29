import { TLevel } from '@root/typings';

export interface IProps {
  startTime: number;
  endTime: number;
  level: TLevel;
  setLevel: (level: TLevel) => void;
  setStartTime: (date: number) => void;
  setEndTime: (date: number) => void;
}
