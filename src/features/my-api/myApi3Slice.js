import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

function queryMsgFromApi() {
    return axios.get('/api/hello');
}

export const myApiAsync = createAsyncThunk(
    'myApi3', // type，随便起个名字
    async (param, action) => {
        console.log('param:', param);
        console.log('action:', action);
        const res = await queryMsgFromApi();
        return res.data;
    }
);

export const myApi3Slice = createSlice({
    name: 'myApi3',
    initialState: {
        msg: "init",
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(myApiAsync.pending, (state) => {
            state.msg = 'pending';
            console.log("pending");
        })
        .addCase(myApiAsync.fulfilled, (state, action) => {
            state.msg = action.payload;
            console.log("fulfilled");
            console.log('state:', state);
            console.log('action:', action);
        })
    },
});

export const selectMsg = (state) => state.myApi3Model.msg;

export default myApi3Slice.reducer;