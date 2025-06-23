import {httpClient} from "../index.tsx";
import {CARD_ENDPOINT} from "./index.enum.ts";
import type {CardResponse, CreateCardPayload} from "./index.types.ts";

export const createCard = (payload:CreateCardPayload) => {
    return  httpClient.post(CARD_ENDPOINT.CREATE_CARD,payload,{
        headers: {"Content-Type": "multipart/form-data"}
    }).then((res)=>res.data)
}

export const updateCard = ({payload,id}:{payload:CreateCardPayload,id:string}) => {
    return  httpClient.put(CARD_ENDPOINT.UPDATE_CARD.replace(":id",id),payload).then((res)=>res.data)
}

export const deleteCard = (id:number) => {
    return  httpClient.delete(CARD_ENDPOINT.DELETE_CARD.replace(":id",String(id))).then((res)=>res.data)
}

export const getCard =  () => {
    return  httpClient.get<CardResponse[]>(CARD_ENDPOINT.GET_CARDS).then((res)=>res.data)
}