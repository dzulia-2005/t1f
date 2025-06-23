import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

type childrenProps = {
    children:React.ReactNode;
}

export const AuthGuard = ({children}:childrenProps) => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        if(!token){
            navigate("/login");
        }
    }, [token,navigate]);

    return <>{children}</>
}