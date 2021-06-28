import {createSlice} from "@reduxjs/toolkit";

export const bitcoinVolumeReducer = createSlice({
    name: 'price',
    initialState: {
        value: 1000,
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

export const {increment, decrement} = bitcoinVolumeReducer.actions
export default bitcoinVolumeReducer.reducer
