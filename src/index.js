import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import {HashRouter} from 'react-router-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
