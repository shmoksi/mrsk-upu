import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import runtime from './runtime';

export default combineReducers({
  router: routerReducer,
  runtime
});
