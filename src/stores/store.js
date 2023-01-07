import { configureStore } from '@reduxjs/toolkit';
import myCounterReducer from '../features/my-counter/myCounterSlice'

export const store = configureStore({
  reducer: {
    counterModel: myCounterReducer,
  },
});
