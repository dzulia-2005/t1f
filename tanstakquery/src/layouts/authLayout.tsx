import {Outlet} from "react-router-dom";


const AuthLayout = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <Outlet/>
        </div>
    )
}

export default AuthLayout