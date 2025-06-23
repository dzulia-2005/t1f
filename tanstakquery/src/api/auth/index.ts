import {httpClient} from "../index.tsx";
import {AUTH_ENDPOINT} from "./index.enum.ts";
import type {LoginPayload, MeResponse, refreshPayload, RegisterPayload} from "./index.types.ts";

export const Login = ( payload : LoginPayload) => {
    return  httpClient.post(AUTH_ENDPOINT.LOGIN,payload).then((res)=>res.data)
}

export const Register = (payload:RegisterPayload) => {
    return  httpClient.post(AUTH_ENDPOINT.REGISTER,payload).then((res)=>res.data)
}

export const Me = () => {
    return  httpClient.get<MeResponse>(AUTH_ENDPOINT.ME).then((res)=>res.data)
}

export const Refresh =  (payload:refreshPayload) => {
    return  httpClient.post(AUTH_ENDPOINT.refresh,payload).then((res)=>res.data)
}