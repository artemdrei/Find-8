import React, { useEffect, useState } from 'react';

import Switcher from '@root/components/Switcher';

import s from './s.module.scss';

const Theme = () => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const storage = localStorage.getItem('find8') || '{}';
    const theme = JSON.parse(storage).theme;
    const html = document.documentElement;

    setTheme(theme);
    html.setAttribute('data-theme', theme);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const html = document.documentElement;
    const theme = e.target.checked ? 'light' : '';
    const storage = localStorage.getItem('find8') || '{}';
    const updatedData = { ...JSON.parse(storage), theme };

    setTheme(theme);
    localStorage.setItem('find8', JSON.stringify(updatedData));
    html.setAttribute('data-theme', theme);
  };

  const isChecked = theme === 'light';
  const checkedClassName = isChecked ? s.checked : '';

  return (
    <Switcher
      className={[s.theme, checkedClassName].join(' ')}
      isChecked={isChecked}
      onChange={handleChange}
    />
  );
};

export default Theme;
