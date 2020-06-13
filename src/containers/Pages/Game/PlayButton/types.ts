export interface IProps {
  startTime: number;
  endTime: number;
  className?: string;
  setStartTime: (time: number) => void;
  setEndTime: (time: number) => void;
}
