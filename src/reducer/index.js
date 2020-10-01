import {combineReducers} from 'redux';

import lang from './lang';
import filters from './filters';
export default combineReducers({
  lang,
  filters,
});
