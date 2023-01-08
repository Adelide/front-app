import { configureStore } from '@reduxjs/toolkit';
import myCounterReducer from '../features/my-counter/myCounterSlice'
import myApi3Reducer from '../features/my-api/myApi3Slice'

export const store = configureStore({
  reducer: {
    counterModel: myCounterReducer,
    myApi3Model: myApi3Reducer,
  },
});