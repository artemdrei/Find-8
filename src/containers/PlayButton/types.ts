export interface IProps {
  startTime: number;
  endTime: number;
  hasAnswerBtn: boolean;
  className?: string;
  setStartTime: (time: number) => void;
  setEndTime: (time: number) => void;
  toggleAnswerBtn: (flag: boolean) => void;
}
