import React from 'react';
import { useTodo } from 'utilits/context/useTodo';
import TodoItem from '../TodoItem/TodoItem';
import TodoPanel from '../TodoPanel/TodoPanel';
import './TodoList.css';

const TodoList = () => {
  const { todoList, todoIdForEdit } = useTodo();
  return (
    <div className="todo__list">
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
