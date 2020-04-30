import { TLevel } from '@root/typings';

export interface IProps {
  level: TLevel;
  setLevel: (level: TLevel) => void;
  setStartTime: (date: number) => void;
}
