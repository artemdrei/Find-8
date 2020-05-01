import React, { useState, useEffect } from 'react';

import { IProps, TMatrix } from './types';

import { CONFIG } from '@root/config';
import { generateMatrix } from '@root/utils';
import { setSeekedValue } from './utils/setSeekedValue';
import { setResultInLocalStorage } from './utils/setResultInLocalStorage';

import s from './styles.scss';

let matrix: TMatrix = [];
const Field: React.FC<IProps> = (props) => {
  const { level, hasAnswerBtn, startTime, setEndTime } = props;
  const [fadeIn, setFadeIn] = useState(s.fadeIn);

  useEffect(() => {
    // TODO:: refactoring later
    // Animate content on time change (browser don't animate same keyframe on rerender)
    setFadeIn(fadeIn === s.fadeIn ? s.fadeIn2 : s.fadeIn);
  }, [startTime]);

  const { rows, cells } = CONFIG.levels[level];
  const { defaultValue, seekedValue } = CONFIG.field;
  const coreMatrix = generateMatrix(rows, cells, defaultValue);
  // Use cached matrix on giveUp for preventing generated new one on rerender
  matrix = hasAnswerBtn ? matrix : setSeekedValue(coreMatrix, rows, cells, seekedValue);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hasAnswerBtn) return;

    const { content } = (e.target as HTMLDivElement).dataset;

    if (content === seekedValue.toString()) {
      console.log('SUCCESS');
      const endTime = +new Date();
      setEndTime(endTime);
      setResultInLocalStorage(level, startTime, endTime);
    } else {
      console.log('ERRROR');
    }
  };

  return (
    <div onClick={handleClick} className={fadeIn}>
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
  );
};

export default Field;
