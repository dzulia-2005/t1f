import {useMutation} from "@tanstack/react-query";
import {Login, Refresh, Register} from "../../../api/auth";

export const useLoginMutation = () => {
    return useMutation({
        mutationKey:['login'],
        mutationFn:Login
    })
}

export const useRegiseterMutation = () => {
    return useMutation({
        mutationKey:['register'],
        mutationFn:Register
    })
}

export const useRefreshMuitation = () => {
    return useMutation({
        mutationKey:['refresh'],
        mutationFn:Refresh
    })
}