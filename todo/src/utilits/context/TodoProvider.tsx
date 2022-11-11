import React, { FC, useState } from 'react';
import { TodoContext } from './TodoContext';
import TODO_LIST from 'data/todoCollection';
import { ITodo } from 'types/types';

interface ITodoProviderProps {
  children: React.ReactNode;
}

const TodoProvider: FC<ITodoProviderProps> = ({ children }) => {
  const [todoList, setTodoList] = useState<ITodo[]>(TODO_LIST);
  const [todoIdForEdit, setTodoIdForEdit] = useState<number | null>(null);

  const selectTodoIdForEdit = (id: number) => {
    setTodoIdForEdit(id);
  };
  const addTodo = ({ name, description }: Omit<ITodo, 'id' | 'checked'>) => {
    setTodoList([...todoList, { name, description, id: todoList.length + 1, checked: false }]);
  };

  const deleteItem = (id: number) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const checkedTodo = (id: number) => {
    console.log('click');
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }

        return todo;
      })
    );
  };

  const changeTodo = ({ name, description }: Omit<ITodo, 'id' | 'checked'>) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === todoIdForEdit) {
          return { ...todo, name, description };
        }

        return todo;
      })
    );
    setTodoIdForEdit(null);
  };
  const value = {
    todoList,
    todoIdForEdit,
    deleteItem,
    checkedTodo,
    selectTodoIdForEdit,
    changeTodo,
    addTodo,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
