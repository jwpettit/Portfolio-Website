import { Outlet } from "react-router-dom";
import Navigation from "./components/Navbar";

export default function Layout() {
    return (
        <>
            <div>
                <Navigation />
            </div>
            <div>
                <Outlet />
            </div>
        </>
    );
}
