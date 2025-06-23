import Header from "../components/base/Header.tsx";
import Footer from "../components/base/Footer.tsx";
import {Outlet} from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="flex-grow px-[3%] py-6">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default DashboardLayout;