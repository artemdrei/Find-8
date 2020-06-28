import { TLevel } from '@root/typings';
import { getStorage } from '@root/utils';

/**
 *
 * Set best user result in localStore
 */

// TODO:: refactoring later
export const setResultInLocalStorage = (level: TLevel, startTime: number, endTime: number) => {
  const storage = getStorage();
  const seekDuration = endTime - startTime;

  if (!storage) {
    const result = {
      ...storage,
      [level]: { startTime, endTime, seekDuration },
    };

    localStorage.setItem('find8', JSON.stringify(result));
  } else if (storage) {
    if (storage[level]) {
      const isTheBestResult = seekDuration < storage[level].seekDuration;

      // Update the best result
      if (isTheBestResult) {
        const result = {
          ...storage,
          [level]: { startTime, endTime, seekDuration },
        };
        localStorage.setItem('find8', JSON.stringify(result));
      }
    } else {
      const result = {
        ...storage,
        [level]: { startTime, endTime, seekDuration },
      };
      localStorage.setItem('find8', JSON.stringify(result));
    }
  }
};
