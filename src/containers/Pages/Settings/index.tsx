import React, { useState, useEffect, useContext } from 'react';

import { TLanguages } from '@root/i18n/context/types';

import Header from './Header';
import Row from './Row';
import Avatar from './Avatar';
import Language from './Language';

import { IProps } from './types';

import s from './styles.scss';

import { I18nContext } from '@root/i18n';
import Theme from './Theme';
import Field from './Field';

const Settings: React.FC<IProps> = ({ field, changeField }) => {
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
        <Avatar className={s.avatar} alt={labels.settings.avatar.alt} />
        <Row
          left={<h4 className={s.title}>{labels.settings.language}</h4>}
          right={<Language language={language} setLanguage={setLanguage} />}
        />
        <Row left={<h4 className={s.title}>{labels.settings.theme}</h4>} right={<Theme />} />
        <Row
          left={<h4 className={s.title}>{labels.settings.fieldContent}</h4>}
          right={<Field field={field} changeField={changeField} />}
        />
      </div>
    </div>
  );
};

export default Settings;
