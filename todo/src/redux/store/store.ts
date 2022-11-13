import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../reducers/TodoSlice';

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
