export type RegisterPayload = {
    payload:{
        username: string;
        email: string;
        password: string;
    }
}

export type LoginPayload = {
    payload:{
        username: string;
        password: string;
    }
}

export type RefreshPayload = {
    payload: {
        refreshToken: string;
    }
}

export type Stock = {
    id: 7,
    company: string
    title: string
    purchase: number,
    industry: string
    comments: string[]
}


export type MeResponse = {
    id: string;
    userName: string
    email: string
    stocks: Stock[]
}
