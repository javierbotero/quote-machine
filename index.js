import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import { Provider } from 'react-redux';
import store from './src/store/store';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

const container = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App twitterIcon={brands('twitter')} />
  </Provider>,
  container
);
