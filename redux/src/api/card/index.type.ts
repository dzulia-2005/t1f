export type CardPayload = {
    Title:string;
    Company:string;
    Purchase:number;
    LastDividend:number;
    Industry:string;
    MarketCap:number;
    ImageUrl:string;
}

export type UpdateCardPayload = {
    Title:string;
    Company:string;
    Purchase:number;
    LastDividend:number;
    Industry:string;
    MarketCap:number;
    ImageUrl:string;
}


    export type CardResponse = {
    id : number;
    title : string;
    company : string;
    purchase: number;
    lastDividend: number;
    industry : string;
    marketCap: number;
    imageUrl: null;
    comments: Array<{
        id: string;
        title: string;
        content: string;
        stockID: string;
    }>;
    }