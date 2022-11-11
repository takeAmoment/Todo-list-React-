import React from 'react';
import TODO_LIST from 'data/todoCollection';
import { useState } from 'react';
import { ITodo } from 'types/types';
import Header from 'components/Header/Header';
import './styles/App.css';
import TodoPanel from 'components/TodoPanel/TodoPanel';
import TodoList from 'components/TodoList/TodoList';

const App = () => {
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

  const checkedTodo = (id: ITodo['id']) => {
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

  return (
    <div className="app__container">
      <Header todoCount={todoList.length} />
      <div className="todo__container">
        <TodoPanel mode="add" addTodo={addTodo} />
        <TodoList
          todoIdForEdit={todoIdForEdit}
          todoList={todoList}
          deleteItem={deleteItem}
          checkedTodo={checkedTodo}
          selectTodoIdForEdit={selectTodoIdForEdit}
          changeTodo={changeTodo}
        />
      </div>
    </div>
  );
};

export default App;
