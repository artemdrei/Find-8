import React from 'react';

import { IProps } from './types';
import { TScore } from '@root/typings';
import { CONFIG } from '@root/config';

import Form from 'react-bootstrap/Form';
import { TLevel } from '@root/typings';

const Level: React.FC<IProps> = ({ level: selectedLevel, setLevel, setStartTime }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const level = e.target.value as TLevel;
    setLevel(level);
    setStartTime(+new Date());
  };

  const score: TScore = JSON.parse(localStorage.getItem('find8') as string);
  const noInsanityLevel = !score || !score.ninja;

  return (
    <div>
      {Object.keys(CONFIG.levels).map((level) => {
        if (noInsanityLevel && level === 'insanity') return null;

        return (
          <div key={`custom-inline-${level}`}>
            <Form.Check
              custom
              id={level}
              value={level}
              checked={level === selectedLevel}
              label={level}
              type="radio"
              name="levels"
              onChange={handleChange}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Level;
