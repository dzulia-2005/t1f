import Header from "../components/base/Header.tsx";
import Footer from "../components/base/Footer.tsx";
import {Outlet} from "react-router-dom";

const DashboardLayouts = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex-grow px-[3rem] py-5">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default DashboardLayouts