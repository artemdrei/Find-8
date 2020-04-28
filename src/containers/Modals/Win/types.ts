import { TLevel } from '@root/typings';

export interface IProps {
  isShown: boolean;
  seekDuration: number;
  level: TLevel;
  setLevel: (level: TLevel) => void;
  onHide: () => void;
}
