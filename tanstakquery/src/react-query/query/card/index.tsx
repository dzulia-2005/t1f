import {useQuery} from "@tanstack/react-query";
import {getCard} from "../../../api/card";

export const useGetCards = () => {
    return useQuery({
        queryKey: ['cards'],
        queryFn:getCard,
    })
}