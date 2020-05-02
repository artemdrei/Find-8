import { TConfig } from './typings';

import label from '@root/i18n';

const field = {
  defaultValue: '😀',
  seekedValue: '💩',
};

const levels = {
  easy: {
    label: label.levels.easy,
    rows: 6,
    cells: 6,
    nextLevel: 'medium',
  },
  medium: {
    label: label.levels.medium,
    rows: 10,
    cells: 10,
    nextLevel: 'hard',
  },
  hard: {
    label: label.levels.hard,
    rows: 20,
    cells: 20,
    nextLevel: 'ninja',
  },
  ninja: {
    label: label.levels.ninja,
    rows: 25,
    cells: 25,
    nextLevel: 'insanity',
  },
  insanity: {
    label: label.levels.ninja,
    rows: 25,
    cells: 25,
    nextLevel: '',
  },
};

export const CONFIG: TConfig = {
  levels,
  field,
};
