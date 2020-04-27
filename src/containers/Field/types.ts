import { TLevel } from '@root/typings';

export type TMatrix = number[][];

export interface IProps {
  level: TLevel;
  isStarted: null | boolean;
  setTime: (date: number) => void;
  onWin: () => void;
}
