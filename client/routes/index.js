import React from 'react';
import { Route } from 'react-router';

import App from 'containers/App';
import Test from 'containers/Test';

const routes = (
  <Route path="/" component={App}>
    <Route path="*" component={Test} />
  </Route>
);

export default routes;
