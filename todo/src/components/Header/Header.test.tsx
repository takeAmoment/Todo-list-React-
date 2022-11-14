import React from 'react';
import store from '../../redux/store/store';
import { Provider } from 'react-redux';
import Header from './Header';
import { render, screen } from '@testing-library/react';
import TODO_LIST from 'data/todoCollection';
import userEvent from '@testing-library/user-event';
import TodoPanel from 'components/TodoPanel/TodoPanel';

beforeEach(() => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
});
const renderPanel = () =>
  render(
    <Provider store={store}>
      <TodoPanel mode="add" />
    </Provider>
  );

describe('Header', () => {
  test('renders', () => {
    expect(screen.getByText(/todo list/i)).toBeInTheDocument();
  });

  test('show right amount of tasks', () => {
    expect(screen.getByText(`ToDo List ${TODO_LIST.length} tasks`)).toBeInTheDocument();
    renderPanel();

    userEvent.click(screen.getByRole('button', { name: /add/i }));
    expect(screen.getByText(`ToDo List ${TODO_LIST.length + 1} tasks`)).toBeInTheDocument();
  });
});
