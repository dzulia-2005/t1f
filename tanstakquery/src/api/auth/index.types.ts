export type LoginPayload = {
    username: string;
    password: string;
}

export type RegisterPayload = {
    username: string;
    email: string;
    password: string;
}

export type StockType = {
    id: number;
    company: string;
    title: string;
    purchase: number;
    industry: string;
    comments: string[];
};

export type MeResponse = {
    id: string;
    userName: string;
    email: string;
    stocks: StockType[];
}

export type refreshPayload = {
    refreshToken: string
}