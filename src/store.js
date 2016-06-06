import { createStore } from 'redux';
import { combineReducers } from 'redux';

import sayHi from './say-hi';
import sayHello from './say-hello';

const finalReducer = combineReducers({sayHi, sayHello});
export default createStore(finalReducer);
