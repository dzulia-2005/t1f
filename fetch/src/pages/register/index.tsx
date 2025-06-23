import {Input} from "antd";
import {useNavigate} from "react-router-dom";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {RegisterSchema} from "./schema.ts";

const Register = () => {
    const navigate  = useNavigate();

    const handleRegister = async({username,email,password}:{username:string,email:string,password:string}) => {
        const res = await fetch("http://localhost:5183/api/register",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        });

        if(res.ok){
            navigate("/login")
        }

        return res.json()
    }

    const {handleSubmit,control,formState:{errors}} = useForm({
        defaultValues:{
            username:"",
            password:"",
            email:""
        },
        resolver:zodResolver(RegisterSchema)
    })

    return (
        <div className="flex justify-center h-screen items-center">
            <div className="w-[30rem] h-[25rem] bg-[#00ffff] rounded-md">
                <div className="flex items-center justify-center h-[40px]">
                    <div className="text-xl">Register</div>
                </div>
                <form className="flex justify-center" onSubmit={handleSubmit(handleRegister)}>
                    <div className="py-7">

                        <div>
                            <label>Username</label>
                            <Controller
                                control={control}
                                name="username"
                                render={({field:{onChange,value}})=>(
                                    <Input
                                        onChange={onChange}
                                        value={value}
                                        placeholder="enter username"
                                    />
                                )}
                            />
                            {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                        </div>

                        <div>
                            <label>email</label>
                            <Controller
                                name="email"
                                control={control}
                                render={({field:{onChange,value}})=>(
                                    <Input
                                        onChange={onChange}
                                        value={value}
                                        placeholder="enter email"
                                    />
                                )}
                            />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label>Password</label>
                            <Controller
                                name="password"
                                control={control}
                                render={({field:{onChange,value}})=>(
                                    <Input
                                        placeholder="enter pass"
                                        onChange={onChange}
                                        value={value}
                                    />
                                )}
                            />
                            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        </div>

                        <div className="flex justify-center mt-3">
                            <button
                                type="submit" className="w-[50%] bg-[#49cc90] rounded cursor-pointer"
                            >
                                Sign Up
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;