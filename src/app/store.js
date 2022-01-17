import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice.js';
import todoReducer from '../features/todo/todoSlice.js'
import uiReducer from '../features/ui/uiSlice.js'
// import timerReducer from '../features/timer/timerSlice.js'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    ui: uiReducer,

  },
});
