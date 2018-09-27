import { combineReducers } from 'redux';
import auth from './auth';
import facebook from './facebook';

const reducers = { auth, facebook };

export default combineReducers(reducers);
