import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import TestComp from './test-comp';

ReactDOM.render(
  <Provider store={store}>
    <TestComp/>
  </Provider>,
  document.getElementById('app'));
