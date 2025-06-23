import {useNavigate} from "react-router-dom";
import {useRefreshMuitation} from "../react-query/mutation/auth";
import {useEffect} from "react";
import {httpClient} from "../api";
import {signInSuccess} from "../pages/auth/login/utils";
import {queryClient} from "../main.tsx";

export const useHttpInterceptor = () => {
    const navigate = useNavigate();
    const {mutate:handleRefresh} = useRefreshMuitation();
    useEffect(() => {
        const interceptor = httpClient.interceptors.response.use(
            (res)=>{
                return res
            },
            (error)=>{
                const refreshToken = localStorage.getItem("refreshToken");
                if(error.response?.status === 401 && refreshToken){
                    return new Promise((resolve, reject)=>{
                        handleRefresh(
                            {refreshToken},
                            {
                                onSuccess:(res) => {
                                    console.log(res,"es aris accessToken")
                                    signInSuccess({
                                        token:res.token,
                                        refreshToken:res.refreshToken
                                    });
                                    error.config.headers["Authorization"] = `${res.token}`;
                                    resolve(httpClient(error.config));
                                },
                                onError:() => {
                                    localStorage.removeItem("refreshToken");
                                    localStorage.removeItem("token")
                                    queryClient.clear();
                                    navigate("/")
                                    reject(error)
                                }
                            }
                        )
                    })
                }
                if(error.response?.status){
                    navigate("/")
                }

                return Promise.reject(error)
            }
        )

        return () => {
            httpClient.interceptors.response.eject(interceptor)
        }
    }, [handleRefresh,navigate]);
}