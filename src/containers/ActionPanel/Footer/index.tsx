import React from 'react';
import { Link } from 'react-router-dom';

import labels from '@root/i18n';

import s from './s.module.scss';
import GearIcon from '@root/assets/icons/settings.svg';

const Footer = () => {
  return (
    <div className={s.footer}>
      <Link to="/settings" className={s.settings}>
        <GearIcon className={s.gearIcon} />
        {labels.settings.settings}
      </Link>
    </div>
  );
};

export default Footer;
