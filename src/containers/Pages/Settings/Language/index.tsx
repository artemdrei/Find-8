import React, { useContext } from 'react';

import { IProps } from './types';
import { TLanguages } from '@root/i18n/context/types';

import { getStorage, setStorage } from '@root/utils';

import Select from '@root/components/Select';

import { I18nContext, translations } from '@root/i18n';

const Languages: React.FC<IProps> = ({ language, setLanguage }) => {
  // @ts-ignore
  const { labels, dispatch } = useContext(I18nContext);
  const data = Object.keys(translations).map((key) => ({ label: key, value: key }));

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const langCode = e.target.value as TLanguages;
    const storage = getStorage();
    console.log('storage:', storage);
    const updatedData = { ...storage, language: langCode };
    setStorage(updatedData);

    setLanguage(langCode);
    dispatch({ type: 'SET_LANGUAGE', payload: langCode });
  };

  return (
    <Select
      data={data}
      name="languages"
      variant="outline"
      ariaLabel="languages"
      defaultValue={language}
      onChange={handleChange}
    />
  );
};

export default Languages;
