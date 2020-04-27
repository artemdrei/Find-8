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
  },
  medium: {
    label: 'Medium',
    rows: 10,
    cells: 10,
  },
  hard: {
    label: 'Hard',
    rows: 20,
    cells: 20,
  },
  ninja: {
    label: 'Ninja',
    rows: 25,
    cells: 25,
  },
};

export const CONFIG: TConfig = {
  levels,
  field,
};
