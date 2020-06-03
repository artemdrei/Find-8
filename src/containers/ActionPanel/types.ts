import { TLevel } from '@root/typings';

export interface IProps {
  level: TLevel;
  startTime: number;
  endTime: number;
  setStartTime: (time: number) => void;
  setEndTime: (time: number) => void;
  setLevel: (level: TLevel) => void;
}
