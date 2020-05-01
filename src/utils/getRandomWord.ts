import { getRandomInt } from '.';

/**
 *
 * Return random word from array
 */
export const getRandomWord = (words: string[]) => {
  const index = getRandomInt(0, words.length);
  return words[index];
};
