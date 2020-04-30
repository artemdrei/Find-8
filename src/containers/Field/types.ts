import { TLevel } from '@root/typings';

export type TMatrix = number[][];

export interface IProps {
  level: TLevel;
  hasAnswerBtn: boolean;
  startTime: number;
  setEndTime: (date: number) => void;
}
