/**
 *
 * Get random integer
 */
export const getRandomInt = (min: number, max: number): number => {
  let rand = Math.random() * (max - min) + min;
  return Math.floor(rand);
};
