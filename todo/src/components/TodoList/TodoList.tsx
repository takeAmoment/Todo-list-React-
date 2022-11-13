import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import TodoPanel from '../TodoPanel/TodoPanel';
import './TodoList.css';
import { selectTodo } from '../../redux/reducers/TodoSlice';
import useAppSelector from 'hooks/UseAppSelector';

const TodoList = () => {
  const { todoList, todoIdForEdit } = useAppSelector(selectTodo);

  return (
    <div className="todo__list" data-testid="todo-list">
      {todoList.map((item) => {
        if (item.id === todoIdForEdit) {
          return (
            <TodoPanel
              mode="edit"
              key={item.id}
              editTodo={{ name: item.name, description: item.description }}
            />
          );
        }
        return <TodoItem key={item.id} todo={item} />;
      })}
    </div>
  );
};

export default TodoList;
