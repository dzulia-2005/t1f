import {useQuery} from "@tanstack/react-query";
import {GetAllCards} from "../../../api/card";

export const useGetAll = () => {
    return useQuery({
        queryKey:["allCard"],
        queryFn:GetAllCards
    })
}