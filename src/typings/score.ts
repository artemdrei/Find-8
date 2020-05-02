import { TLevel } from './levels';

export type TScore = {
  [key in TLevel]: {
    startTime: number;
    endTime: number;
    seekDuration: number;
  };
};
