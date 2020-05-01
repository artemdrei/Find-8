import { TLevel } from '@root/typings';

export type TMatrix = number[][];

export interface IProps {
  level: TLevel;
  hasAnswerBtn: boolean;
  endTime: number;
  startTime: number;
  setLevel: (level: TLevel) => void;
  setStartTime: (date: number) => void;
  setEndTime: (date: number) => void;
  toggleQuickClickToast: (flag: boolean) => void;
}
