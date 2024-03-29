import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { CONFIG } from '@root/config';
import { mobileCheck, getStorage } from '@root/utils';

import Game from '@root/containers/Pages/Game';
import Settings from '@root/containers/Pages/Settings';

import s from './styles.scss';

const App = () => {
  const isMobile = mobileCheck();
  const platformId = isMobile ? 'isMobile' : 'isDesktop';
  const { defaultValue, seekedValue, cellSize } = CONFIG.field;
  const [field, changeField] = useState<any>({ defaultValue, seekedValue, cellSize });

  useEffect(() => {
    const theme = getStorage('theme');
    const html = document.documentElement;
    html.setAttribute('data-theme', theme);

    const field = getStorage('field');
    const defaultValue = field?.defaultValue || CONFIG.field.defaultValue;
    const seekedValue = field?.seekedValue || CONFIG.field.seekedValue;
    const cellSize = CONFIG.field.cellSize;

    changeField({ defaultValue, seekedValue, cellSize });
  }, []);

  return (
    <main id={platformId} className={s.game}>
      <div className={s.container}>
        <Switch>
          <Route path="/game">
            <Game field={field} />
          </Route>
          <Route path="/settings">
            <Settings field={field} changeField={changeField} />
          </Route>
          <Redirect to="/game" />
        </Switch>
      </div>
    </main>
  );
};

export default App;
