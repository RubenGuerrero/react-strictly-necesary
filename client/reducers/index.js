import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { me } from './me';

export default combineReducers({
  routing: routerReducer,
  me
});
