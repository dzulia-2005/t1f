export type CreateCardPayload = {
    Title:string,
    Company:string,
    Purchase:number,
    LastDividend:number,
    Industry:string,
    MarketCap:number,
    ImageUrl:string,
}

export type CardResponse = {
    id: number;
    Title: string;
    Company: string;
    Purchase: number;
    LastDividend: number;
    Industry: string;
    MarketCap: number
    Comments: string[],
    Portfolios: string|number[],
    CreatedUserById: string;
    ImageUrl: string;
}

