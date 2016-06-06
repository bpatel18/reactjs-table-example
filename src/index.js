import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Todo from './component/todo';
import TodoList from './component/todo-list';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Todo/>
      <TodoList/>
    </div>
  </Provider>,
  document.getElementById('app'));
