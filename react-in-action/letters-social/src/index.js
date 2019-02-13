import React, { Component } from 'react';
import { render } from 'react-dom';

import App from './app';

import './shared/crash';
import './shared/service-worker';
//import './shared/vendor';
import './styles/styles.scss';

render(
  <App />,
  document.getElementById('app')
);
