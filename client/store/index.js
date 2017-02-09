import { createStore, applyMiddleware, compose } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';

import rootReducer from 'reducers';

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
}

const enhancer = compose(
  applyMiddleware(thunk),
  persistState(getDebugSessionKey()),
  devToolsEnhancer()
);

export default function configureStore(initialState = {}) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('reducers', () =>
      // eslint-disable-next-line global-require
      store.replaceReducer(require('reducers'))
    );
  }

  return store;
}
