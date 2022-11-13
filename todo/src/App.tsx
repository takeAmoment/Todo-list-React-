import React from 'react';
import Header from 'components/Header/Header';
import './styles/App.css';
import TodoPanel from 'components/TodoPanel/TodoPanel';
import TodoList from 'components/TodoList/TodoList';

const App = () => {
  return (
    <div className="app__container" data-testid="app-container">
      <Header />
      <div className="todo__container">
        <TodoPanel mode="add" />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
