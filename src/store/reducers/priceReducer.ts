import {createSlice} from "@reduxjs/toolkit";

export const priceReducer = createSlice({
    name: 'price',
    initialState: {
        value: 10000,
    },
    reducers: {
        increment: state => {
            state.value += 1000
        },
        decrement: state => {
            state.value -= 1000
        }
    }
})

export const {increment, decrement} = priceReducer.actions
