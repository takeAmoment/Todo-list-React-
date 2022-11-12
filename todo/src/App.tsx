import React from 'react';
import Header from 'components/Header/Header';
import './styles/App.css';
import TodoPanel from 'components/TodoPanel/TodoPanel';
import TodoList from 'components/TodoList/TodoList';
import store from './redux/store/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app__container">
        <Header />
        <div className="todo__container">
          <TodoPanel mode="add" />
          <TodoList />
        </div>
      </div>
    </Provider>
  );
};

export default App;
