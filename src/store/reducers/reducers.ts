import {combineReducers, configureStore, createAction, createSlice} from "@reduxjs/toolkit";

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
        buy: state => {
            state.bitcoinAmount += 1
        },
        sell: state => {
            state.bitcoinAmount -= 1
        }
    }
})

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

export const rootReducer = configureStore({
    reducer:
        combineReducers({
            price: priceReducer.reducer,
            wallet: cashReducer.reducer,
            history: historyReducer.reducer
        })
})


export const {increment, decrement} = priceReducer.actions
export const {deposit, withdraw, buy, sell} = cashReducer.actions
export const {addToHistory} = historyReducer.actions
