import { TLevel } from '@root/typings';

export interface IProps {
  level: TLevel;
  startTime: number;
  endTime: number;
  hasAnswerBtn: boolean;
  setStartTime: (time: number) => void;
  setEndTime: (time: number) => void;
  toggleAnswerBtn: (flag: boolean) => void;
  setLevel: (level: TLevel) => void;
}
