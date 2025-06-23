import {useMutation} from "@tanstack/react-query";
import {Login, Refresh, Register} from "../../../api/auth";

export const useLogin = () => {
    return useMutation({
        mutationKey:['login'],
        mutationFn:Login
    })
}

export const useRegister = () => {
    return useMutation({
        mutationKey:['register'],
        mutationFn:Register
    })
}

export const useRefresh = () => {
    return useMutation({
        mutationKey:['refresh'],
        mutationFn:Refresh
    })
}