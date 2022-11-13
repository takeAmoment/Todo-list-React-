import React from 'react';
import store from '../../redux/store/store';
import { Provider } from 'react-redux';
import TodoPanel from './TodoPanel';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('TodoPanel', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <TodoPanel mode="add" />
      </Provider>
    );
  });
  test('renders', () => {
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
  });
});

describe('Name input', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <TodoPanel mode="add" />
      </Provider>
    );
  });
  test('renders', () => {
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
  });

  test('change value', () => {
    const nameInput = screen.getByPlaceholderText(/name/i);
    expect(nameInput).toHaveValue('');

    userEvent.type(nameInput, 'task');
    expect(nameInput).toHaveValue('task');
  });

  test('is cleared after adding a todo', () => {
    const nameInput = screen.getByPlaceholderText(/name/i);
    expect(nameInput).toHaveValue('');

    userEvent.type(nameInput, 'task');
    expect(nameInput).toHaveValue('task');
    userEvent.click(screen.getByRole('button', { name: /add/i }));

    expect(nameInput).toHaveValue('');
  });
});

describe('Description input', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <TodoPanel mode="add" />
      </Provider>
    );
  });
  test('renders', () => {
    expect(screen.getByPlaceholderText(/description/i)).toBeInTheDocument();
  });

  test('change value', () => {
    const descriptionInput = screen.getByPlaceholderText(/description/i);
    expect(descriptionInput).toHaveValue('');

    userEvent.type(descriptionInput, 'description');
    expect(descriptionInput).toHaveValue('description');
  });

  test('is cleared after adding a todo', () => {
    const descriptionInput = screen.getByPlaceholderText(/description/i);
    expect(descriptionInput).toHaveValue('');

    userEvent.type(descriptionInput, 'description');
    expect(descriptionInput).toHaveValue('description');
    userEvent.click(screen.getByRole('button', { name: /add/i }));

    expect(descriptionInput).toHaveValue('');
  });
});
