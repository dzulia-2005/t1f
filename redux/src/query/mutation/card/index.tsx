import {useMutation} from "@tanstack/react-query";
import {CreateCard, DeleteCard, UpdateCard} from "../../../api/card";
import {queryClient} from "../../../main.tsx";

export const useCreateCardMutation = () => {
    return useMutation({
        mutationKey: ["card"],
        mutationFn:CreateCard,
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:["allCard"]})
        }
    })
}

export const useUpdateCardMutation = () => {
    return useMutation({
        mutationKey:['update'],
        mutationFn:UpdateCard,
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:['allCard']})
        }
    })
}

export const useDeleteCardMutation = () => {
    return useMutation({
        mutationKey:['delete'],
        mutationFn:DeleteCard,
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['allCard']})
        }

    })
}