import {setAuthorizationHeader} from "../../../../api";

export const signInSuccess = ({token,refreshToken}:{token:string,refreshToken:string}) => {
    localStorage.setItem('token',token);
    localStorage.setItem('refreshToken',refreshToken);

    setAuthorizationHeader(`${token}`);
}