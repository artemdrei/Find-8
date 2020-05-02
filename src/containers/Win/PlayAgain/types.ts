import { TLevel } from '@root/typings';

export interface IProps {
  level: TLevel;
  handleNextLevel: () => void;
  handleRetry: () => void;
}
