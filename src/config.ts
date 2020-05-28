import { TConfig, TLevels, TField } from './typings';

import labels from '@root/i18n';

const field: TField = {
  defaultValue: '9',
  seekedValue: 'AA',
  cellSize: 30,
};

const levels: TLevels = {
  easy: {
    label: labels.levels.easy,
    rows: 6,
    columns: 6,
    nextLevel: 'medium',
  },
  medium: {
    label: labels.levels.medium,
    rows: 10,
    columns: 10,
    nextLevel: 'hard',
  },
  hard: {
    label: labels.levels.hard,
    rows: 20,
    columns: 20,
    nextLevel: 'ninja',
  },
  ninja: {
    label: labels.levels.ninja,
    rows: 25,
    columns: 25,
    nextLevel: 'insanity',
  },
  insanity: {
    label: labels.levels.ninja,
    rows: 25,
    columns: 25,
    nextLevel: '',
  },
};

export const CONFIG: TConfig = {
  levels,
  field,
};
