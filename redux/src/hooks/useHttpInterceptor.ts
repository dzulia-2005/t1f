import {useNavigate} from "react-router-dom";
import {useRefresh} from "../query/mutation/auth";
import {useEffect} from "react";
import {httpClient} from "../api";
import {SignInSuccess} from "../pages/auth/login/utils";

export const useHttpInterceptor = () => {
    const navigate = useNavigate();
    const {mutate:handleRefresh} = useRefresh();

    useEffect(() => {
        const interceptor = httpClient.interceptors.response.use(
            (res)=>{
                return res;
            },
            (err)=>{
                const refreshToken = localStorage.getItem("refreshToken");
                if(err.response?.status===401 && refreshToken){
                    return new Promise((resolve, reject)=>{
                        handleRefresh(
                            {payload: {refreshToken}},
                            {
                                onSuccess:(res)=>{
                                    SignInSuccess({
                                        token:res.token,
                                        refreshToken:res.refreshToken,
                                    });
                                    err.config.headers["Authorization"] = `${res.token}`
                                    resolve(httpClient(err.config))
                                },
                                onError:(err)=>{
                                    localStorage.removeItem("token");
                                    localStorage.removeItem("refreshToken");
                                    navigate("/login");
                                    reject(err);
                                }
                            }
                        )
                    })
                }
                if(err.response?.status===404){
                    navigate("/login");
                }

                return Promise.reject(err);
            }
        )

        return () => {
            httpClient.interceptors.response.eject(interceptor)
        }
    }, [handleRefresh,navigate]);
}