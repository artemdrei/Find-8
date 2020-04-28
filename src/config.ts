import { TConfig } from './typings';

const field = {
  defaultValue: '😀',
  seekedValue: '💩',
};

const levels = {
  easy: {
    label: 'Easy',
    rows: 6,
    cells: 6,
    nextLevel: 'medium',
  },
  medium: {
    label: 'Medium',
    rows: 10,
    cells: 10,
    nextLevel: 'hard',
  },
  hard: {
    label: 'Hard',
    rows: 20,
    cells: 20,
    nextLevel: 'ninja',
  },
  ninja: {
    label: 'Ninja',
    rows: 25,
    cells: 25,
    nextLevel: 'ninja',
  },
};

export const CONFIG: TConfig = {
  levels,
  field,
};
