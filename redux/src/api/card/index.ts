import {httpClient} from "../index.ts";
import {CARD_ENDPOINTS} from "./index.enum.ts";
import type {CardPayload, CardResponse, UpdateCardPayload} from "./index.type.ts";

export const CreateCard = (payload:CardPayload) => {
    return httpClient.post(CARD_ENDPOINTS.CREATECARD, payload ,{
        headers: {"Content-Type": "multipart/form-data"}
    }).then((res)=>res.data)
}

export const DeleteCard = (id:number) => {
    return httpClient.delete(CARD_ENDPOINTS.DELETECARD.replace(":id",String(id))).then((res)=>res.data)
}

export const UpdateCard = ({id,payload}:{id:string;payload:UpdateCardPayload}) => {
    return httpClient.put(CARD_ENDPOINTS.UPDATECARD.replace(":id",id),payload,{
        headers: {"Content-Type": "multipart/form-data"}
    }).then((res)=>res.data)
}

export const GetAllCards = () => {
    return httpClient.get<CardResponse[]>(CARD_ENDPOINTS.GETALLCARD).then((res)=>res.data)
}