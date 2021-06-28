import {configureStore} from "@reduxjs/toolkit";
import bitcoinVolumeReducer from "./reducers/bitcoinVolumeReducer";
import {cashReducer} from "./reducers/cashReducer";

export default configureStore({
    reducer: {
// @ts-ignore
        volume: bitcoinVolumeReducer,
// @ts-ignore
//         cash: cashReducer,
    },
})
