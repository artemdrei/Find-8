import React from 'react';

import { IProps } from './types';
import { CONFIG } from '@root/config';

import Form from 'react-bootstrap/Form';
import { TLevel } from '@root/typings';

const Level: React.FC<IProps> = ({ level, setLevel }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const level = e.target.value as TLevel;
    setLevel(level);
  };

  return (
    <div>
      {Object.keys(CONFIG.levels).map((key) => (
        <div key={`custom-inline-${key}`}>
          <Form.Check
            custom
            id={key}
            value={key}
            checked={key === level}
            label={key}
            type="radio"
            name="levels"
            onChange={handleChange}
          />
        </div>
      ))}
    </div>
  );
};

export default Level;
