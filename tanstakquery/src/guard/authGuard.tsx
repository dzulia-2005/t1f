import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


type AuthGuardProps = {
    children:React.ReactNode;
}

const AuthGuard = ({children}:AuthGuardProps) => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if(!token){
            navigate("/login")
        }
    }, [navigate,token]);

    return <>{children}</>
}

export default AuthGuard;