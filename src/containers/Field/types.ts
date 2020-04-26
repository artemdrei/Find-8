export type TMatrix = number[][];

export interface IProps {
  isStarted: boolean;
  setIsStarted: () => void;
  onWin: () => void;
}
