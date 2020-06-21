import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { mobileCheck } from '@root/utils';

import Game from '@root/containers/Pages/Game';
import Settings from '@root/containers/Pages/Settings';

import s from './styles.scss';

const App = () => {
  const isMobile = mobileCheck();
  const platformId = isMobile ? 'isMobile' : 'isDesktop';

  useEffect(() => {
    const storage = localStorage.getItem('find8') || '{}';
    const theme = JSON.parse(storage).theme;
    const html = document.documentElement;

    html.setAttribute('data-theme', theme);
  }, []);

  return (
    <main id={platformId} className={s.game}>
      <div className={s.container}>
        <Switch>
          <Route path="/game" component={Game} />
          <Route path="/settings" component={Settings} />
          <Redirect to="/game" />
        </Switch>
      </div>
    </main>
  );
};

export default App;
