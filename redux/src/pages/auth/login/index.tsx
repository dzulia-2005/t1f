import {Input} from "antd";
import {Controller, useForm} from "react-hook-form";
import type {LoginPayload} from "../../../api/auth/index.types.ts";
import {loginSchema} from "./schema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {useLogin} from "../../../query/mutation/auth";
import {SignInSuccess} from "./utils";
import {useNavigate} from "react-router-dom";
import {queryClient} from "../../../main.tsx";

type loginValue = LoginPayload["payload"]
const loginFormDefaultValues:loginValue = {
    username:"",
    password:""
}

const Login = () => {
    const navigate = useNavigate();

    const {handleSubmit,control,formState:{errors}} = useForm({
        defaultValues:loginFormDefaultValues,
        resolver:zodResolver(loginSchema)
    })

    const {mutate:handleLogin} = useLogin();

    const onSubmit = (loginpayload:loginValue) => {
        console.log("clicked+!")
        handleLogin(
            {payload:loginpayload},
            {
                onSuccess:(res) => {
                    SignInSuccess({
                        token:res.token,
                        refreshToken: res.refreshToken,
                    })
                    navigate("/")
                    queryClient.invalidateQueries({queryKey:["me"]})
                }
            })
    }

    return(
        <div className="w-[20rem] bg-red-500 h-[250px] px-10 py-10 rounded-xl">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>username</label>
                    <Controller
                        name={"username"}
                        control={control}
                        render={({field: {onChange, value}}) => (
                            <Input
                                onChange={onChange}
                                value={value}
                                placeholder="enter username"
                            />
                        )}
                    />
                    {errors.username && <p className="text-[#000]">{errors.username.message}</p>}
                </div>

                <div>
                    <label>password</label>
                    <Controller
                        name={"password"}
                        control={control}
                        render={({field: {onChange, value}}) => (
                            <Input
                                onChange={onChange}
                                value={value}
                                placeholder="enter password"
                            />
                        )}
                    />
                    {errors.password && <p className="text-[#000]">{errors.password.message}</p>}
                </div>
                <div className="flex justify-center my-5 pb-10">
                    <button type="submit">Login</button>
                </div>
            </form>

        </div>
    )
}

export default Login;