import { createStore } from 'redux';
import { combineReducers } from 'redux';

import Todos from './reducers/todos';

const finalReducer = combineReducers({Todos});
export default createStore(finalReducer);
