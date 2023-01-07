import { createSlice } from '@reduxjs/toolkit';

export const myCounterSlice = createSlice({
    name: 'myCounter',
    initialState: {
        valueInCounter: 0,
    },
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      increment: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.valueInCounter += 1;
      },
      incrementWithValue: (state, action) => {
        state.valueInCounter += action.payload
      },
    },
});

export const { increment, incrementWithValue, } = myCounterSlice.actions;

export const selectCount = (state) => state.counterModel.valueInCounter;

export default myCounterSlice.reducer;