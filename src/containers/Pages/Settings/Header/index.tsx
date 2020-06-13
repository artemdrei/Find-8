import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { I18nContext } from '@root/i18n';

import s from './s.module.scss';
import btnS from '@root/components/Button/s.module.scss';

const Header = () => {
  const { labels } = useContext(I18nContext);

  return (
    <header className={s.header}>
      <Link to="/game" className={[btnS.btn, btnS.primary, btnS.outline, s.backBtn].join(' ')}>
        {labels.buttons.back}
      </Link>
      {labels.settings.backDescription}
    </header>
  );
};

export default Header;
