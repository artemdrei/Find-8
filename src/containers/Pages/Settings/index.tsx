import React, { useState, useEffect, useContext } from 'react';

import { TLanguages } from '@root/i18n/context/types';

import Header from './Header';
import Avatar from './Avatar';
import Language from './Language';

import s from './styles.scss';

import { I18nContext } from '@root/i18n';
import Theme from './Theme';

const Settings = () => {
  const [language, setLanguage] = useState<TLanguages>('en');
  const { labels } = useContext(I18nContext);

  useEffect(() => {
    const storage = localStorage.getItem('find8') || '{}';
    const langCode = JSON.parse(storage)['language'] || 'en';
    setLanguage(langCode);
  }, []);

  return (
    <div className={s.settings}>
      <Header />
      <div className={s.container}>
        <div className={s.avatar}>
          <Avatar className={s.avatar} alt={labels.settings.avatar.alt} />
        </div>
        <div className={s.row}>
          <div className={s.cell}>
            <h4 className={s.title}>{labels.settings.language}</h4>
          </div>
          <div className={s.cell}>
            <Language language={language} setLanguage={setLanguage} />
          </div>
        </div>
        <div className={s.row}>
          <div className={s.cell}>
            <h4 className={s.title}>{labels.settings.theme}</h4>
          </div>
          <div className={s.cell}>
            <Theme />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
