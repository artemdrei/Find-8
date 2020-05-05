type ISeekDuration = {
  time: string;
  units: string;
};

export const getSeekDuration = (startTime: number, endTime: number): ISeekDuration => {
  const seekDuration = endTime - startTime;
  const minutes = Math.floor(seekDuration / 60000);
  const seconds = +((seekDuration % 60000) / 1000).toFixed(2);
  const time = minutes
    ? seconds === 60
      ? minutes + 1 + ':00'
      : minutes + ':' + (seconds < 10 ? '0' : '') + seconds
    : seconds;

  const units = minutes ? 'min' : 'sec';

  return {
    time: time.toString(),
    units,
  };
};
