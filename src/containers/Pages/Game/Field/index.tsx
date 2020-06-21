import React, { useState, useEffect, memo } from 'react';
import { compose } from 'redux';

import { IProps, TMatrix } from './types';

import If from '@root/components/If';
import MatrixRain from '@root/containers/Pages/Game/MatrixRain';

import { CONFIG } from '@root/config';
import { generateMatrix } from '@root/utils';
import { setSeekedValue } from './utils/setSeekedValue';
import { useFieldSize } from './utils/useFieldSize';

import { setResultInLocalStorage } from './utils/setResultInLocalStorage';

import s from './styles.scss';

const Field: React.FC<IProps> = (props) => {
  const { level, startTime, endTime, setEndTime } = props;
  const [fadeIn, setFadeIn] = useState(s.fadeIn);
  const [matrix, setMatrix] = useState<TMatrix>([]);
  const { rows, columns } = CONFIG.levels[level];

  const { defaultValue, seekedValue, cellSize } = CONFIG.field;
  const [height, width] = useFieldSize();

  useEffect(() => {
    if (level === 'insanity') {
      initMatrix(rows, columns, defaultValue, true);
    } else {
      initMatrix(rows, columns, defaultValue);
    }

    // TODO:: Animate content on time change (browser don't animate same keyframe on rerender)
    setFadeIn(fadeIn === s.fadeIn ? s.fadeIn2 : s.fadeIn);
  }, [width, height, startTime, level]);

  const initMatrix = (
    rows: number,
    columns: number,
    defaultValue: string | number,
    isFullScreen?: boolean
  ) => {
    if (!width || !height || !startTime) return;

    const maxRows = Math.floor(width / cellSize);
    const maxColumns = Math.floor(height / cellSize);

    // Fit field in screen size
    let r = rows > maxRows ? maxRows : rows;
    let c = columns > maxColumns ? maxColumns : columns;

    if (isFullScreen) {
      r = maxRows;
      c = maxColumns;
    }

    const matrix = compose(
      (matrix: TMatrix) => setSeekedValue(matrix, r, c, seekedValue),
      () => generateMatrix(r, c, defaultValue)
    );

    setMatrix(matrix);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent show win page if click on highlighted answer
    if (startTime === endTime) return;

    const { content } = (e.target as HTMLDivElement).dataset;
    const correctAnswer = content === seekedValue.toString();

    if (correctAnswer) {
      const endTime = +new Date();
      setEndTime(endTime);
      setResultInLocalStorage(level, startTime, endTime);
    }
  };

  const isInsanity = level === 'insanity';
  const insanityClassName = isInsanity ? s.insanity : '';

  return (
    <>
      <If condition={isInsanity}>
        <MatrixRain />
      </If>
      <div onClick={handleClick} className={[s.field, fadeIn, insanityClassName].join(' ')}>
        {matrix.map((row, i) => {
          return (
            <div className={s.row} key={'row' + i}>
              {row.map((val, j) => {
                const marked = startTime === endTime && val === seekedValue ? s.highlighted : '';
                return <div className={[s.cell, marked].join(' ')} key={'cell' + j} data-content={val}></div>;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default memo(Field);
