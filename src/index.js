import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import TodoStore from "./mobx/TodoStore"
import TodoList from "./mobx/TodoList"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoList store={TodoStore} />, document.getElementById('root'));
registerServiceWorker();
