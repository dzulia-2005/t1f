import {useQuery} from "@tanstack/react-query";
import {Me} from "../../../api/auth";

export const useMeQuery = () => {
    return useQuery({
        queryKey:["me"],
        queryFn:Me
    })
}