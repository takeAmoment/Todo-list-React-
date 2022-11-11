import React from 'react';
import Header from 'components/Header/Header';
import './styles/App.css';
import TodoPanel from 'components/TodoPanel/TodoPanel';
import TodoList from 'components/TodoList/TodoList';
import TodoProvider from 'utilits/context/TodoProvider';

const App = () => {
  return (
    <TodoProvider>
      <div className="app__container">
        <Header />
        <div className="todo__container">
          <TodoPanel mode="add" />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
