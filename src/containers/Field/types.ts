import { TLevel } from '@root/typings';

export type TMatrix = number[][];

export interface IProps {
  level: TLevel;
  seekDuration: number;
  time: number;
  setLevel: (level: TLevel) => void;
  setTime: (date: number) => void;
  setSeekDuration: (date: number) => void;
  onWin: () => void;
}
