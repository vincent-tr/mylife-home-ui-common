import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import errors from './errors';
import online from './online';
import repository from './repository';
import resources from './resources';
import view from './view';
import windows from './windows';

export default combineReducers({
  errors,
  online,
  repository,
  resources,
  view,
  windows,
  routing: routerReducer
});