import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { mobileCheck } from '@root/utils';

import Game from '@root/containers/Pages/Game';
import Settings from '@root/containers/Pages/Settings';

import s from './styles.scss';

const App = () => {
  const isMobile = mobileCheck();
  const platformId = isMobile ? 'isMobile' : 'isDesktop';

  return (
    <main id={platformId} className={s.game}>
      <Switch>
        <Route path="/game" component={Game} />
        <Route path="/settings" component={Settings} />
        <Redirect to="/game" />
      </Switch>
    </main>
  );
};

export default App;
