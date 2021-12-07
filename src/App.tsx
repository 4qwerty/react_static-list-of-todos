import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './componets/TodoList/TodoList';

const preparedTodos = todos.map((todo) => {
  return {
    ...todo,
    user: users.find((user) => user.id === todo.userId) || null,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;