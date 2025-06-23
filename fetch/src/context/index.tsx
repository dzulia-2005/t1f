import {createContext, type PropsWithChildren, useEffect, useState} from "react";

type AuthContextType = {
    isLoading: boolean;
    user: User | null
}

export type StockType = {
    id: number;
    company: string;
    title: string;
    purchase: number;
    industry: string;
    comments: any[];
};

type User = {
    id: string;
    userName: string;
    email: string;
    stocks: StockType[];
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider:React.FC<PropsWithChildren> = ({children}) => {
    const [user,setUser] = useState<User|null>(null);
    const [isLoading,] = useState<boolean>(false);

    const accessToken = localStorage.getItem('token');

    const fetchData = async () => {
        try {
            const res = await fetch('http://localhost:5183/api/account/me', {
                method: 'GET',
                headers:{
                    'Authorization': `Bearer ${accessToken}`
                }
            })
            const data = await res.json();
            setUser(data);
        }
        catch(err){
            setUser(null);
            console.error("Auth err",err);
        }
    }

    useEffect(() => {
       fetchData()
    },[])

    return (
        <AuthContext.Provider value={{user,isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}