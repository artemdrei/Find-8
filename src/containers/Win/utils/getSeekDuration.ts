type ISeekDuration = {
  time: number;
  units: string;
};

export const getSeekDuration = (startTime: number, endTime: number): ISeekDuration => {
  const seekDuration = endTime - startTime;
  const minutes = Math.floor(seekDuration / 60000);
  const seconds = +((seekDuration % 60000) / 1000).toFixed(2);
  const time = minutes
    ? seconds == 60
      ? minutes + 1 + ':00'
      : minutes + ':' + (seconds < 10 ? '0' : '') + seconds
    : seconds;
  const units = minutes ? (minutes > 2 ? 'minutes' : 'minutes') : seconds > 1 ? 'seconds' : 'second';

  return {
    time: +time,
    units,
  };
};