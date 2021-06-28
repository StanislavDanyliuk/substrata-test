import {createSlice} from "@reduxjs/toolkit";

export const cashReducer = createSlice({
    name: 'cash',
    initialState: {
        value: 200,
    },
    reducers: {
        deposit: state => {
            state.value += 100
        },
        withdraw: state => {
            state.value -= 100
        }
    }
})

export const {deposit, withdraw} = cashReducer.actions
export default cashReducer.reducer
