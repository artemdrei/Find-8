import { TLevel } from '@root/typings';

/**
 *
 * Set best user result in localStore
 */

// TODO:: refactoring later
export const setResultInLocalStorage = (level: TLevel, startTime: number, endTime: number) => {
  const score = JSON.parse(localStorage.getItem('find8') as string);
  const seekDuration = endTime - startTime;

  if (!score) {
    const result = {
      ...score,
      [level]: { startTime, endTime, seekDuration },
    };

    localStorage.setItem('find8', JSON.stringify(result));
  } else if (score) {
    if (score[level]) {
      const isTheBestResult = seekDuration < score[level].seekDuration;

      // Update the best result
      if (isTheBestResult) {
        const result = {
          ...score,
          [level]: { startTime, endTime, seekDuration },
        };
        localStorage.setItem('find8', JSON.stringify(result));
      }
    } else {
      const result = {
        ...score,
        [level]: { startTime, endTime, seekDuration },
      };
      localStorage.setItem('find8', JSON.stringify(result));
    }
  }
};
