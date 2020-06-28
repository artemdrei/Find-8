import React, { useEffect, useState } from 'react';

import { getStorage, setStorage } from '@root/utils';

import Switcher from '@root/components/Switcher';

import s from './s.module.scss';

const Theme = () => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const theme = getStorage('theme');
    const html = document.documentElement;

    setTheme(theme);
    html.setAttribute('data-theme', theme);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const html = document.documentElement;
    const theme = e.target.checked ? 'light' : '';
    const storage = getStorage();
    const updatedData = { ...storage, theme };

    setTheme(theme);
    setStorage(updatedData);
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
