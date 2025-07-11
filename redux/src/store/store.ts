import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../features/auth/index.ts"

export const store = configureStore({
    reducer : {
        auth:authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch