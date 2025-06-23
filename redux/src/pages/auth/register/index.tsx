import {Input} from "antd";
import {Controller, useForm} from "react-hook-form";
import type {RegisterPayload} from "../../../api/auth/index.types.ts";
import {useRegister} from "../../../query/mutation/auth";
import {useNavigate} from "react-router-dom";
import {zodResolver} from "@hookform/resolvers/zod";
import {RegisterSchema} from "./schema.ts";

    type RegisterValues = RegisterPayload["payload"]
    const RegisterDefaultValues:RegisterValues = {
        email:"",
        password:"",
        username:"",
    }

    const RegisterPage = () => {
        const navigate = useNavigate();
        const {handleSubmit,control,formState:{errors}} = useForm({
            defaultValues:RegisterDefaultValues,
            resolver:zodResolver(RegisterSchema)
        })

        const {mutate:handleRegister} = useRegister();

        const onSubmit = (registerPayload:RegisterValues) => {
            handleRegister(
                {payload:registerPayload},
                {
                    onSuccess:() => {
                        navigate("/login")
                    },
                    onError: (err) => {
                        console.error("err",err)
                    }
                }
            )
        }

    return (
        <div className="w-[25rem] h-[350px] bg-red-500 p-10 rounded-xl">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>username</label>
                    <Controller
                        name={"username"}
                        control={control}
                        render={({field:{onChange,value}})=>(
                            <Input
                                placeholder="enter username"
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />
                    {errors.username && <p className="text-[#000]">{errors.username.message}</p>}
                </div>
                <div>
                    <label>email</label>
                   <Controller
                    name={"email"}
                    control={control}
                    render={({field:{onChange,value}})=>(
                        <Input
                            onChange={onChange}
                            value={value}
                            placeholder="enter email"
                        />
                    )}
                   />
                    {errors.email&& <p className="text-[#000]" >{errors.email.message}</p>}
                </div>
                <div>
                    <label>password</label>
                    <Controller
                        name={"password"}
                        control={control}
                        render={({field:{value,onChange}})=>(
                            <Input
                                onChange={onChange}
                                value={value}
                                placeholder="enter password"
                            />
                        )}
                    />
                    {errors.password && <p className="text-[#000]">{errors.password.message}</p>}
                </div>
                <div className="flex justify-center ">
                   <button type="submit" className="py-10">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage;