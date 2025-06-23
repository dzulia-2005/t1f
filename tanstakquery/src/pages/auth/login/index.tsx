import {Input} from "antd";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {loginSchema} from "./schema.ts";
import {useLoginMutation} from "../../../react-query/mutation/auth";
import type {LoginPayload} from "../../../api/auth/index.types.ts";
import {signInSuccess} from "./utils";
import {useNavigate} from "react-router-dom";
import {queryClient} from "../../../main.tsx";

type LoginFormValues = LoginPayload

const LoginFormDefaultvalues : LoginFormValues = {
    username: '',
    password: ''
}

const LoginPage = () => {

    const {handleSubmit,control,formState:{errors}} = useForm({
        defaultValues:LoginFormDefaultvalues,
        resolver:zodResolver(loginSchema)
    })

    const navigate = useNavigate();

    const {mutate:handlelogin} = useLoginMutation()

    const onSubmit = (loginPayload:LoginFormValues) => {
        handlelogin(loginPayload,{
            onSuccess:(res)=>{
                signInSuccess({
                    token:res.token,
                    refreshToken:res.refreshToken,
                })
                navigate("/")
                queryClient.invalidateQueries({queryKey:["me"]})
            },
            onError:(err) => {
                console.error(err)
            }
        })
    }


    return (
        <div className="w-[25rem]">
            <form
                className="w-[25rem] h-[300px] bg-[#a42f2f] px-9 rounded-xl"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex justify-center pt-5">
                    <h1 className="text-[#fff]">Login</h1>
                </div>
                <div className="my-5 ">
                    <Controller
                        name="username"
                        control={control}
                        render={({field:{onChange,value}})=>(
                            <Input
                                placeholder="username"
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />
                    {errors.username && (
                        <p>{errors.username.message}</p>
                    )}
                </div>
                <div className="my-5">
                    <Controller
                        name="password"
                        control={control}
                        render={({field:{onChange,value}})=>(
                            <Input
                                placeholder="password"
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />
                    {errors.password && (
                        <p>{errors.password.message}</p>
                    )}
                </div>
                <div className="flex justify-center">
                    <button type="submit">Sign_In</button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;