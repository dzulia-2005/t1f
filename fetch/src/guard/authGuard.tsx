import {type ReactNode, useEffect} from "react";
import {useNavigate} from "react-router-dom";

type AuthGuardProps = {
    children : ReactNode
}

const AuthGuard = ({children}:AuthGuardProps) => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if(!token){
            navigate("/login");
        }
    }, [token,navigate])


    return <>{children}</>
}

export default AuthGuard;