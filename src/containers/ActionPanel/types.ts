import { TLevel } from '@root/typings';

export interface IProps {
  endTime: number;
  level: TLevel;
  setStartTime: (time: number) => void;
  setEndTime: (time: number) => void;
  setLevel: (level: TLevel) => void;
}
