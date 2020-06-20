import { TLevel } from '@root/typings';

/**
 *
 * Set best user result in localStore
 */

// TODO:: refactoring later
export const setResultInLocalStorage = (level: TLevel, startTime: number, endTime: number) => {
  const storage = localStorage.getItem('find8') || '{}';
  const score = JSON.parse(storage) || {};
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
