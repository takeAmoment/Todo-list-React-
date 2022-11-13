import React from 'react';
import store from '../../redux/store/store';
import { Provider } from 'react-redux';
import TodoList from './TodoList';
import { render, screen } from '@testing-library/react';

describe('TodoList', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  });
  test('renders', () => {
    expect(screen.getByTestId('todo-list'));
  });
  test('render todo buttons', () => {
    expect(screen.getAllByText(/edit/i)).toHaveLength(4);
    expect(screen.getAllByText(/delete/i)).toHaveLength(4);
  });
});
