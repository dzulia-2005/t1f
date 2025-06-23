import {NavLink, useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("refreshToken")
        navigate("/login");
    }

    return (
        <header>
            <div className="h-[60px] px-5 py-5 bg-[#238636]">
                <nav className="flex justify-between">
                    <NavLink to={"/"}>
                        <ul>
                            LOGO
                        </ul>
                    </NavLink>

                    <ul className="flex gap-2">
                        <NavLink to={"/"}>
                            <li>home</li>
                        </NavLink>
                        <NavLink to={"/create-card"}>
                            <li>create-card</li>
                        </NavLink>
                        <li onClick={()=>handleLogOut()}>log_Out</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header