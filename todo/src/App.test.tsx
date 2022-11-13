import React from 'react';
import App from './App';
import store from './redux/store/store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

describe('App', () => {
  test('renders', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByTestId('app-container')).toBeInTheDocument();
  });
});
