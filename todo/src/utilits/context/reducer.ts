import { ITodo } from 'types/types';

type Action =
  | { type: 'ADD_TODO'; payload: { name: string; description: string } }
  | { type: 'SELECT_FOREDIT'; payload: number | null }
  | { type: 'DELETE_ITEM'; payload: number }
  | { type: 'CHECK_TODO'; payload: number }
  | { type: 'CHANGE_TODO'; payload: { name: string; description: string } };

interface TodoState {
  todoList: ITodo[];
  todoIdForEdit: number | null;
}

const reducer = (state: TodoState, action: Action): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            name: action.payload.name,
            description: action.payload.description,
            id: state.todoList.length + 1,
            checked: false,
          },
        ],
      };
    case 'SELECT_FOREDIT':
      return {
        ...state,
        todoIdForEdit: action.payload,
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== action.payload),
      };
    case 'CHECK_TODO':
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, checked: !todo.checked };
          }

          return todo;
        }),
      };
    case 'CHANGE_TODO':
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === state.todoIdForEdit) {
            return { ...todo, name: action.payload.name, description: action.payload.description };
          }

          return todo;
        }),
        todoIdForEdit: null,
      };
    default:
      return state;
  }
};
export default reducer;
