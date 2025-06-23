import {Input} from "antd";
import {Controller, useForm} from "react-hook-form";
import {LoginSchema} from "./schema.ts";
import {zodResolver} from "@hookform/resolvers/zod"
import {useNavigate} from "react-router-dom";



const Login = () => {
    const navigate = useNavigate();

    const handleLogin = async({username,password}:{username:string;password:string}) => {
        const res = await fetch("http://localhost:5183/api/account/login",{
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                username,
                password,
            })
        })

        const data = await res.json();

        if(res.ok && data.token){
            localStorage.setItem("token",data.token)
            navigate("/")
        }

        return data;
    }

    const {control,handleSubmit,formState:{errors}} = useForm({
        defaultValues:{
            username:"",
            password:""
        },
        resolver:zodResolver(LoginSchema)
    })

    return (
        <div className="flex justify-center h-screen items-center">
            <div className="w-[25rem] h-[20rem] bg-[#00ffff] rounded-xl">
                <div className="flex items-center justify-center h-[40px]">
                    <div className="text-xl">Login</div>
                </div>
                <form className="flex justify-center" onSubmit={handleSubmit(handleLogin)}>
                    <div className="py-7">
                        <div>
                            <label>UserName</label>
                            <Controller
                                render={({field:{onChange,value}})=>(
                                    <Input
                                        placeholder="Username"
                                        value={value}
                                        onChange={onChange}
                                    />
                                )}
                                name="username"
                                control={control}
                            />
                            {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                        </div>
                        <div>
                            <label>Password</label>
                            <Controller
                                name="password"
                                control={control}
                                render={({field:{onChange,value}})=>(
                                    <Input
                                        placeholder="Password"
                                        type="password"
                                        value={value}
                                        onChange={onChange}
                                    />
                                )}
                            />
                            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        </div>
                        <div className="py-3 flex justify-center">
                            <button type="submit">Sign In</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login