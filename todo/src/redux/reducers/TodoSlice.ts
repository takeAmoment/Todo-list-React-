import TODO_LIST from 'data/todoCollection';
import { ITodo } from 'types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store/store';

interface TodoSliceState {
  todoList: ITodo[];
  todoIdForEdit: number | null;
}

const initialState: TodoSliceState = {
  todoList: TODO_LIST,
  todoIdForEdit: null,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Omit<ITodo, 'id' | 'checked'>>) => {
      state.todoList = [
        ...state.todoList,
        {
          name: action.payload.name,
          description: action.payload.description,
          id: state.todoList.length + 1,
          checked: false,
        },
      ];
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.todoList = state.todoList.filter((todo) => todo.id !== action.payload);
    },
    selectTodoIdForEdit: (state, action: PayloadAction<number>) => {
      state.todoIdForEdit = action.payload;
    },
    checkedTodo: (state, action: PayloadAction<number>) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, checked: !todo.checked };
        }

        return todo;
      });
    },
    changeTodo: (state, action: PayloadAction<Omit<ITodo, 'id' | 'checked'>>) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === state.todoIdForEdit) {
          return { ...todo, name: action.payload.name, description: action.payload.description };
        }
        return todo;
      });
      state.todoIdForEdit = null;
    },
  },
});

export const selectTodo = (state: RootState) => state.todo;

export default todoSlice.reducer;
