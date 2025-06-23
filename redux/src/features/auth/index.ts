import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {MeResponse} from "../../api/auth/index.types.ts";

type AuthState = {
    token:string;
    refreshToken:string;
    user: MeResponse | null;
}

const initialState : AuthState = {
    token:localStorage.getItem("token")!,
    refreshToken:localStorage.getItem("refreshToken")!,
    user:null,
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setuser : (state,action:PayloadAction<MeResponse>) => {
            state.user = action.payload
        }
    }
})

export const {setuser} = authSlice.actions;
export default authSlice.reducer