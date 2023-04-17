import './scss/index.scss';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import { Provider } from 'react-redux';
import store from './redux/store.js';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);