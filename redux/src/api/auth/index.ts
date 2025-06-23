import {httpClient} from "../index.ts";
import {AUTH_ENDPOINT} from "./index.enum.ts";
import type {LoginPayload, MeResponse, RefreshPayload, RegisterPayload} from "./index.types.ts";

export const Register =  ({payload}:RegisterPayload) => {
    return httpClient.post(AUTH_ENDPOINT.REGISTER,payload).then((res)=>res.data)
}

export const Login = ({payload}:LoginPayload) => {
    return httpClient.post(AUTH_ENDPOINT.LOGIN,payload).then((res)=>res.data)
}

export const Refresh = ({payload}:RefreshPayload) => {
    return httpClient.post(AUTH_ENDPOINT.REFRESH,payload).then((res)=>res.data)
}

export const Me = () => {
    return httpClient.get<MeResponse>(AUTH_ENDPOINT.ME)
}