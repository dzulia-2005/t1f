import Header from "../components/base/header.tsx";
import Footer from "../components/base/footer.tsx";
import {Outlet} from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="flex-grow px-[3rem] py-5">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default DashboardLayout;