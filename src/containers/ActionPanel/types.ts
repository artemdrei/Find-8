import { TLevel } from '@root/typings';

export interface IProps {
  time: number;
  level: TLevel;
  setTime: (time: number) => void;
  setLevel: (level: TLevel) => void;
}
