import { TConfig } from './typings';

import label from '@root/i18n';

const field = {
  defaultValue: '9',
  seekedValue: '8',
};

const levels = {
  easy: {
    label: label.levels.easy,
    rows: 6,
    columns: 6,
    nextLevel: 'medium',
  },
  medium: {
    label: label.levels.medium,
    rows: 10,
    columns: 10,
    nextLevel: 'hard',
  },
  hard: {
    label: label.levels.hard,
    rows: 20,
    columns: 20,
    nextLevel: 'ninja',
  },
  ninja: {
    label: label.levels.ninja,
    rows: 25,
    columns: 25,
    nextLevel: 'insanity',
  },
  insanity: {
    label: label.levels.ninja,
    rows: 25,
    columns: 25,
    nextLevel: '',
  },
};

export const CONFIG: TConfig = {
  levels,
  field,
};
