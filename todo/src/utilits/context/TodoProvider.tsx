import React, { FC, useReducer } from 'react';
import { TodoContext } from './TodoContext';
import TODO_LIST from 'data/todoCollection';
import { ITodo } from 'types/types';
import reducer from './reducer';

interface ITodoProviderProps {
  children: React.ReactNode;
}

const TodoProvider: FC<ITodoProviderProps> = ({ children }) => {
  const initialState = {
    todoList: TODO_LIST,
    todoIdForEdit: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = ({ name, description }: Omit<ITodo, 'id' | 'checked'>) => {
    dispatch({
      type: 'ADD_TODO',
      payload: { name, description },
    });
  };

  const selectTodoIdForEdit = (id: number | null) => {
    dispatch({
      type: 'SELECT_FOREDIT',
      payload: id,
    });
  };

  const deleteItem = (id: number) => {
    dispatch({
      type: 'DELETE_ITEM',
      payload: id,
    });
  };

  const checkedTodo = (id: number) => {
    dispatch({
      type: 'CHECK_TODO',
      payload: id,
    });
  };
  const changeTodo = ({ name, description }: Omit<ITodo, 'id' | 'checked'>) => {
    dispatch({
      type: 'CHANGE_TODO',
      payload: { name, description },
    });
  };

  // const selectTodoIdForEdit = (id: number) => {
  //   setTodoIdForEdit(id);
  // };
  // const addTodo = ({ name, description }: Omit<ITodo, 'id' | 'checked'>) => {
  //   setTodoList([...todoList, { name, description, id: todoList.length + 1, checked: false }]);
  // };

  // const deleteItem = (id: number) => {
  //   setTodoList(todoList.filter((item) => item.id !== id));
  // };

  // const checkedTodo = (id: number) => {
  //   console.log('click');
  //   setTodoList(
  //     todoList.map((todo) => {
  //       if (todo.id === id) {
  //         return { ...todo, checked: !todo.checked };
  //       }

  //       return todo;
  //     })
  //   );
  // };

  // const changeTodo = ({ name, description }: Omit<ITodo, 'id' | 'checked'>) => {
  //   setTodoList(
  //     todoList.map((todo) => {
  //       if (todo.id === todoIdForEdit) {
  //         return { ...todo, name, description };
  //       }

  //       return todo;
  //     })
  //   );
  //   setTodoIdForEdit(null);
  // };
  return (
    <TodoContext.Provider
      value={{
        todoList: state.todoList,
        todoIdForEdit: state.todoIdForEdit,
        addTodo,
        selectTodoIdForEdit,
        deleteItem,
        checkedTodo,
        changeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
