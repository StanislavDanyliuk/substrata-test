import {createSlice} from "@reduxjs/toolkit";

export const historyReducer = createSlice({
    name: 'history',
    initialState: [],
    reducers: {
        addToHistory: (state, action) => {
            // @ts-ignore
            state.push(action.payload)
        }
    }
})
export const {addToHistory} = historyReducer.actions
