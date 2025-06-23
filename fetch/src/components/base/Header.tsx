import {NavLink, useNavigate} from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem("token")
        navigate("/login");
    }

    return (
        <header className="h-[70px] bg-[#00ffff] px-[3%]">
            <div className="flex justify-between items-center h-full">
                <nav>
                    <ul className="list:none pl-0">
                        <NavLink to="/">
                            <li>Home</li>
                        </NavLink>
                    </ul>
                </nav>
                <nav>
                    <ul className="flex list:none pl-0 gap-4">
                        <NavLink to="/">
                            <li>Home</li>
                        </NavLink>
                        <li>Profile</li>
                        <li onClick={()=>handleLogOut()}>Log_Out</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header