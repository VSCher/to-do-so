import { combineReducers } from 'redux';
import baseReducer from './baseReducer';
import sortReducer from './sortReducer';

export default combineReducers({
    base: baseReducer,
    abc: sortReducer
});