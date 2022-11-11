import React from 'react';
import { ITodo } from 'types/types';

interface ITodoContextProps {
  todoList: ITodo[];
  deleteItem: (id: number) => void;
  checkedTodo: (id: number) => void;
  selectTodoIdForEdit: (id: number) => void;
  todoIdForEdit: number | null;
  changeTodo: ({ name, description }: Omit<ITodo, 'id' | 'checked'>) => void;
  addTodo: ({ name, description }: Omit<ITodo, 'id' | 'checked'>) => void;
}

export const TodoContext = React.createContext<ITodoContextProps>({
  todoList: [],
  deleteItem: () => {},
  checkedTodo: () => {},
  selectTodoIdForEdit: () => {},
  todoIdForEdit: null,
  changeTodo: () => {},
  addTodo: () => {},
});
