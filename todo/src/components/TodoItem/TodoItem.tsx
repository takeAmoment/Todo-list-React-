import React, { useState } from 'react';
import { FC } from 'react';
import { ITodoItemProps } from 'types/types';
import MyButton from '../UI/button/MyButton';
import './TodoItem.css';
import { randomColor } from 'utilits/randomColor';
import { todoSlice } from '../../redux/reducers/TodoSlice';
import useAppDispatch from 'hooks/useAppDispatch';

const TodoItem: FC<ITodoItemProps> = ({ todo }) => {
  const [color] = useState<string>(`#${randomColor()}`);
  const dispatch = useAppDispatch();
  return (
    <div className="todo__item" style={{ border: `1px solid ${color}` }}>
      <div className="item__contant" style={{ opacity: todo.checked ? '0.5' : '1' }}>
        <div
          className="item__name"
          style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}
          onClick={() => dispatch(todoSlice.actions.checkedTodo(todo.id))}
        >
          {todo.name}
        </div>
        <div className="item__description">{todo.description}</div>
      </div>
      <div className="todo__buttons">
        <MyButton
          className="button edit__button"
          disabled={false}
          onClick={() => dispatch(todoSlice.actions.selectTodoIdForEdit(todo.id))}
        >
          EDIT
        </MyButton>
        <MyButton
          className="button delete__button"
          disabled={false}
          onClick={() => dispatch(todoSlice.actions.deleteItem(todo.id))}
        >
          DELETE
        </MyButton>
      </div>
    </div>
  );
};

export default TodoItem;
