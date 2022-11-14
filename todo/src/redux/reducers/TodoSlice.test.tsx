import TODO_LIST from 'data/todoCollection';
import { ITodo } from 'types/types';
import todoReducer, { todoSlice, selectTodo } from './TodoSlice';

interface TodoSliceState {
  todoList: ITodo[];
  todoIdForEdit: number | null;
}
const initialState: TodoSliceState = {
  todoList: TODO_LIST,
  todoIdForEdit: null,
};

describe('redux selector', () => {
  test('should select todoList and todoIdForEdit from select object', () => {
    const todo: TodoSliceState = {
      todoList: [{ id: 1, name: 'task1', description: 'description', checked: false }],
      todoIdForEdit: 1,
    };

    const result = selectTodo({ todo });

    expect(result).toEqual(todo);
  });
});

describe('todoSlice', () => {
  test('should return initialState when we pass empty action', () => {
    const result = todoReducer(undefined, { type: '' });

    expect(result).toEqual(initialState);
  });

  test('should add new todo when we call addTodo', () => {
    const action = {
      type: todoSlice.actions.addTodo.type,
      payload: { name: 'my task', description: 'hi' },
    };
    const result = todoReducer(initialState, action);
    const length = initialState.todoList.length;
    expect(result.todoList[length].name).toBe('my task');
    expect(result.todoList[length].description).toBe('hi');
  });

  test('should toggle todo completed status when we call checkedTodo', () => {
    const action = {
      type: todoSlice.actions.checkedTodo.type,
      payload: 1,
    };

    const result = todoReducer(initialState, action);

    expect(result.todoList[0].checked).toBe(true);
  });

  test('should remove todo when we call deleteItem', () => {
    const action = {
      type: todoSlice.actions.deleteItem.type,
      payload: 1,
    };

    const result = todoReducer(initialState, action);

    expect(result.todoList.length).toBe(initialState.todoList.length - 1);
  });

  test('shoult edit todo whrn we call changeTodo', () => {
    const action = {
      type: todoSlice.actions.selectTodoIdForEdit,
      payload: 1,
    };

    const result = todoReducer(initialState, action);
    expect(result.todoIdForEdit).toBe(1);

    const action1 = {
      type: todoSlice.actions.changeTodo.type,
      payload: { name: 'task is changed', description: 'it is also changed' },
    };

    const result1 = todoReducer(result, action1);
    expect(result1.todoList[0].name).toBe('task is changed');
  });
});
