import {NavLink, useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        navigate('/login');
    }

    return (
        <header className="h-[70px] w-full bg-[#a42f2f] px-[3rem]">
            <nav className="flex justify-between items-center h-[70px]">
                <ul>
                    <NavLink to={"/"}>
                        <li>homeLOGO</li>
                    </NavLink>
                </ul>
                <ul className="flex flex-wrap gap-2">
                    <NavLink to={"/"}>
                        <li>home</li>
                    </NavLink>
                    <NavLink to={'/create-card'}>
                        <li>create-card</li>
                    </NavLink>
                    <li
                        className="cursor-pointer"
                        onClick={()=>handleLogOut()}
                    >LOG_OUT</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header