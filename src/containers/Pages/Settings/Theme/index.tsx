import React from 'react';

import { options } from './data';

import Select from '@root/components/Select';

const Theme = () => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const html = document.documentElement;

    if (e.target.value === 'light') {
      html.setAttribute('data-theme', 'light');
    } else {
      html.setAttribute('data-theme', 'dark');
    }
  };

  return (
    <Select data={options} name="languages" variant="outline" ariaLabel="languages" onChange={handleChange} />
  );
};

export default Theme;
