import React, { FC } from 'react';
import { ITodoListProps } from 'types/types';
import TodoItem from '../TodoItem/TodoItem';
import TodoPanel from '../TodoPanel/TodoPanel';
import './TodoList.css';

const TodoList: FC<ITodoListProps> = ({
  todoList,
  deleteItem,
  checkedTodo,
  selectTodoIdForEdit,
  todoIdForEdit,
  changeTodo,
}) => {
  return (
    <div className="todo__list">
      {todoList.map((item) => {
        if (item.id === todoIdForEdit) {
          return (
            <TodoPanel
              mode="edit"
              key={item.id}
              editTodo={{ name: item.name, description: item.description }}
              changeTodo={changeTodo}
            />
          );
        }
        return (
          <TodoItem
            key={item.id}
            todoIdForEdit={todoIdForEdit}
            todo={item}
            deleteItem={deleteItem}
            checkedTodo={checkedTodo}
            selectTodoIdForEdit={selectTodoIdForEdit}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
