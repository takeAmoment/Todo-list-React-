import React from 'react';
import { useTodo } from 'utilits/context/useTodo';
import './Header.css';

const Header = () => {
  const { todoList } = useTodo();
  return (
    <div className="header__container">
      <div className="header__contant">
        ToDo List {todoList.length} {todoList.length > 1 ? 'tasks' : 'task'}
      </div>
    </div>
  );
};

export default Header;
