import React from 'react';

export interface ITodo {
  id: number;
  name: string;
  description: string;
  checked: boolean;
}

export interface IHeader {
  todoCount: number;
}

export interface IMyInputProps {
  id: string;
  name: string;
  value: string;
  className: string;
  description: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ITodoCreation {
  name: string;
  description: string;
}

export interface IMyButtonProps extends React.ComponentPropsWithRef<'button'> {
  className: string;
  disabled: boolean;
}

export interface IAddTodoPanelProps {
  mode: 'add';
}
export interface IEditTodoPanelProps {
  mode: 'edit';
  editTodo: Omit<ITodo, 'id' | 'checked'>;
}

export type ITodoPanelProps = IAddTodoPanelProps | IEditTodoPanelProps;

export interface ITodoListProps {
  todoList: ITodo[];
  deleteItem: (id: number) => void;
  checkedTodo: (id: number) => void;
  selectTodoIdForEdit: (id: number) => void;
  todoIdForEdit: number | null;
  changeTodo: ({ name, description }: Omit<ITodo, 'id' | 'checked'>) => void;
}

export interface ITodoItemProps {
  todo: ITodo;
}
