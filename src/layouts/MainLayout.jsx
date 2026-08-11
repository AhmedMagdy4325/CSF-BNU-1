import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800">
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
