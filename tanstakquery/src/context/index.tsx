import {createContext, type PropsWithChildren, useEffect, useState} from "react";
import {useMeQuery} from "../react-query/query/auth";

type authContextType = {
    isLoading : boolean;
    user: User | null
}

type StockType = {
    id: number;
    company: string;
    title: string;
    purchase: number;
    industry: string;
    comments: any[];
}

type User = {
    id: string;
    userName: string;
    email: string;
    stocks: StockType[];
}

export const AuthContext = createContext<authContextType | null>(null)

export const AuthProvider:React.FC<PropsWithChildren> = ({children}) => {
    const [user,setUser] = useState<User|null>(null);
    const [isLoading,setIsLoading] = useState(false);


   const {data,isLoading:queryLoading} = useMeQuery();

    useEffect(() => {
        if(data){
            setUser(data)
        }
        setIsLoading(queryLoading)
    }, [data]);


    return (
       <AuthContext.Provider value={{user,isLoading}}>
           {children}
       </AuthContext.Provider>
    )
}