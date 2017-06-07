import React from 'react';
import { BrowserRoute } from 'react-router';

import App from 'containers/App';
import Test from 'containers/Test';

const routes = (
  <BrowserRoute path="/" component={App}>
    <BrowserRoute path="*" component={Test} />
  </BrowserRoute>
);

export default routes;
