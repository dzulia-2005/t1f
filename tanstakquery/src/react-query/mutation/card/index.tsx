import {useMutation} from "@tanstack/react-query";
import {createCard, deleteCard, updateCard} from "../../../api/card";
import {queryClient} from "../../../main.tsx";

export const useCreateCard = () => {
    return useMutation({
        mutationKey:['createCard'],
        mutationFn: createCard,
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:['cards']})
        }
    })
}

export const useUpdateCard = () => {
    return useMutation({
        mutationKey:['updateCard'],
        mutationFn:updateCard,
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['cards']})
        }
    })
}

export const useDeleteCard = () => {
    return useMutation({
        mutationKey:['deleteCard'],
        mutationFn:deleteCard,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['cards']})
        }
    })
}