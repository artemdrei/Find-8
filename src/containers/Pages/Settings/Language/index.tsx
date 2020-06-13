import React, { useContext } from 'react';

import Select from '@root/components/Select';

import s from './s.module.scss';

import { I18nContext, translations } from '@root/i18n';

const Languages = () => {
  const { dispatch } = useContext(I18nContext);
  const { labels } = useContext(I18nContext);
  const data = Object.keys(translations).map((key) => ({ label: key, value: key }));

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'SET_LANGUAGE', payload: e.target.value });
  };

  return (
    <div className={s.row}>
      <h4 className={s.title}>{labels.settings.language}</h4>
      <Select name="languages" variant="outline" ariaLabel="languages" data={data} onChange={handleChange} />
    </div>
  );
};

export default Languages;
