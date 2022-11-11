import React, { FC } from 'react';
import { useState } from 'react';
import { ITodoCreation, ITodoPanelProps } from 'types/types';
import { useTodo } from 'utilits/context/useTodo';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';
import './TodoPanel.css';

const TodoPanel: FC<ITodoPanelProps> = (props) => {
  const isEdit = props.mode === 'edit';
  const { addTodo, changeTodo } = useTodo();
  const [todo, setTodo] = useState<ITodoCreation>(
    isEdit ? props.editTodo : { name: '', description: '' }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleClick = () => {
    const todoItem = { name: todo.name, description: todo.description };
    if (isEdit) {
      return changeTodo(todoItem);
    }
    addTodo({ name: todo.name, description: todo.description });
    setTodo({ name: '', description: '' });
  };
  return (
    <div className={isEdit ? 'edit__section' : 'add__section'}>
      <div className="name__input">
        <MyInput
          id="nameInput"
          className="name__input"
          name="name"
          value={todo?.name}
          description="Name"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="description__input">
        <MyInput
          id="descriptionInput"
          className="description__input"
          name="description"
          value={todo?.description}
          description="Description"
          onChange={(e) => handleChange(e)}
        />
      </div>
      {!isEdit && (
        <MyButton className="button add__button" disabled={false} onClick={handleClick}>
          ADD
        </MyButton>
      )}
      {isEdit && (
        <MyButton className="button edit__button" disabled={false} onClick={handleClick}>
          EDIT
        </MyButton>
      )}
    </div>
  );
};

export default TodoPanel;
