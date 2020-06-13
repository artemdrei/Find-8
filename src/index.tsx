import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';
import { I18nContextProvider } from './i18n';

ReactDOM.render(
  <I18nContextProvider>
    <Router>
      <App />
    </Router>
  </I18nContextProvider>,
  document.getElementById('root')
);
