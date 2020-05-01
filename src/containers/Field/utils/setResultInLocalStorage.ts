import { TLevel } from '@root/typings';

/**
 *
 * Set best user result in localStore
 */
export const setResultInLocalStorage = (level: TLevel, startTime: number, endTime: number) => {
  const score = JSON.parse(localStorage.getItem('find8') as string);
  const seekDuration = endTime - startTime;
  const isTheBestResult = seekDuration < score[level].seekDuration;

  // Set first result
  if (!score) {
    const result = {
      [level]: { startTime, endTime, seekDuration },
    };
    localStorage.setItem('find8', JSON.stringify(result));
  } else if (score && isTheBestResult) {
    // Update the best result
    const result = {
      ...score,
      [level]: { startTime, endTime, seekDuration },
    };
    localStorage.setItem('find8', JSON.stringify(result));
  }
};
