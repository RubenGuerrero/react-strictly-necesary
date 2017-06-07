import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Test from 'containers/Test';

import configureStore from 'store';

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={Test} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
