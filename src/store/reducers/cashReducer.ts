import {createSlice} from "@reduxjs/toolkit";

export const cashReducer = createSlice({
    name: 'wallet',
    initialState: {
        cashAmount: 200,
        bitcoinAmount: 10
    },
    reducers: {
        deposit: state => {
            state.cashAmount += 100
        },
        withdraw: state => {
            state.cashAmount -= 100
        },
        buy: (state, action) => {
            state.cashAmount -= action.payload
            state.bitcoinAmount += 1
        },
        sell: (state, action) => {
            state.bitcoinAmount -= 1
            state.cashAmount += action.payload
        }
    }
})

export const {deposit, withdraw, buy, sell} = cashReducer.actions
