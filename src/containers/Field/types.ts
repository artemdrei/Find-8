export type TMatrix = number[][];

export interface IProps {
  isStarted: null | boolean;
  setTime: (date: number) => void;
  onWin: () => void;
}
