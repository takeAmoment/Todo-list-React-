import useAppSelector from 'hooks/UseAppSelector';
import React from 'react';
import { selectTodo } from 'redux/reducers/TodoSlice';
import './Header.css';

const Header = () => {
  const { todoList } = useAppSelector(selectTodo);
  return (
    <div className="header__container">
      <div className="header__contant">
        ToDo List {todoList.length} {todoList.length > 1 ? 'tasks' : 'task'}
      </div>
    </div>
  );
};

export default Header;
