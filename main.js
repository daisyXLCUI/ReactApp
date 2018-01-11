import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TodoApp from './src/TodoApp';

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.querySelector('#app')
);