import { Outlet } from "react-router-dom";
import Navigation from "./components/Navbar";
import Footer from "./components/Footerbar";

export default function Layout() {
    return (
        <>
            <div>
                <Navigation />
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
};
