import React from 'react';
import { Link } from 'react-router-dom';

import s from './styles.scss';
import btnS from '@root/components/Button/s.module.scss';

const Settings = () => {
  return (
    <div className={s.settings}>
      <div>
        <Link to="/game" className={[btnS.btn, btnS.primary, btnS.outline, s.backBtn].join(' ')}>
          Back
        </Link>
        to the game
      </div>
      <h3>Language</h3>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quo veniam illo atque magni ducimus
      corrupti tenetur eligendi excepturi dolorem tempore quae et, rem sint labore. Mollitia nobis at
      similique?
    </div>
  );
};

export default Settings;
