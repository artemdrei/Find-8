import { TLevel } from '@root/typings';

export interface IProps {
  seekDuration: number;
  level: TLevel;
  setLevel: (level: TLevel) => void;
  setTime: (date: number) => void;
  setSeekDuration: (date: number) => void;
}
