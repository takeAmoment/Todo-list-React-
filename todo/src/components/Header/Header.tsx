import React, { FC } from 'react';
import { IHeader } from 'types/types';
import './Header.css';

const Header: FC<IHeader> = ({ todoCount }) => {
  return (
    <div className="header__container">
      <div className="header__contant">
        ToDo List {todoCount} {todoCount > 1 ? 'tasks' : 'task'}
      </div>
    </div>
  );
};

export default Header;
