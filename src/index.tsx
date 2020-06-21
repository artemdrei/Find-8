import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './containers/App';
import { I18nContextProvider } from './i18n';

ReactDOM.render(
  <I18nContextProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </I18nContextProvider>,
  document.getElementById('root')
);
