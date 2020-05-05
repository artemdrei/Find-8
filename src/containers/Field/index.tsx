import React, { useState, useEffect, memo } from 'react';
import { compose } from 'redux';

import { IProps, TMatrix } from './types';

import If from '@root/components/If';
import MatrixRain from '@root/containers/MatrixRain';

import { CONFIG } from '@root/config';
import { generateMatrix } from '@root/utils';
import { setSeekedValue } from './utils/setSeekedValue';
import { useFieldSize } from './utils/useFieldSize';

import { setResultInLocalStorage } from './utils/setResultInLocalStorage';

import s from './styles.scss';

const Field: React.FC<IProps> = (props) => {
  const { level, hasAnswerBtn, startTime, setEndTime } = props;
  const [fadeIn, setFadeIn] = useState(s.fadeIn);
  const [matrix, setMatrix] = useState<TMatrix>([]);
  const { rows, columns } = CONFIG.levels[level];
  const { defaultValue, seekedValue, cellSize } = CONFIG.field;
  const [height, width] = useFieldSize();

  useEffect(() => {
    initMatrix(rows, columns, defaultValue);
  }, [width, height]);

  useEffect(() => {
    if (level === 'insanity') {
      initMatrix(rows, columns, defaultValue, true);
    } else {
      initMatrix(rows, columns, defaultValue);
    }

    // TODO:: Animate content on time change (browser don't animate same keyframe on rerender)
    setFadeIn(fadeIn === s.fadeIn ? s.fadeIn2 : s.fadeIn);
  }, [startTime, level]);

  const initMatrix = (
    rows: number,
    columns: number,
    defaultValue: string | number,
    isFullScreen?: boolean
  ) => {
    if (!width || !height || !startTime) return;

    const maxWidthRows = Math.floor(width / cellSize);
    const maxHeightRows = Math.floor(height / cellSize);

    let r = rows > maxWidthRows ? maxWidthRows : rows;
    let c = rows > maxHeightRows ? maxHeightRows : columns;

    if (isFullScreen) {
      r = maxWidthRows;
      c = maxHeightRows;
    }

    const matrix = compose(
      (matrix: TMatrix) => setSeekedValue(matrix, r, c, seekedValue),
      () => generateMatrix(r, c, defaultValue)
    );

    setMatrix(matrix);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent show win page if click on highlighted answer
    if (hasAnswerBtn) return;

    const { content } = (e.target as HTMLDivElement).dataset;
    const correctAnswer = content === seekedValue.toString();

    if (correctAnswer) {
      const endTime = +new Date();
      setEndTime(endTime);
      setResultInLocalStorage(level, startTime, endTime);
    }
  };

  return (
    <>
      <If condition={level === 'insanity'}>
        <MatrixRain />
      </If>
      <div onClick={handleClick} className={[s.field, fadeIn].join(' ')}>
        {matrix.map((row, i) => {
          return (
            <div className={s.row} key={'row' + i}>
              {row.map((val, j) => {
                const marked = hasAnswerBtn && val === seekedValue ? s.highlighted : '';
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
