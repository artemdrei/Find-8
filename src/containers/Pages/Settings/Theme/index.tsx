import React from 'react';

import Switcher from '@root/components/Switcher';

const Theme = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const html = document.documentElement;
    const theme = e.target.checked ? 'light' : '';

    html.setAttribute('data-theme', theme);
  };

  return <Switcher onChange={handleChange} />;
};

export default Theme;
