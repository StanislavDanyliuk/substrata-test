import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {priceReducer} from "./priceReducer";
import {cashReducer} from "./cashReducer";
import {historyReducer} from "./historyReducer";


export const rootReducer = configureStore({
    reducer:
        combineReducers({
            price: priceReducer.reducer,
            wallet: cashReducer.reducer,
            history: historyReducer.reducer
        })
})



