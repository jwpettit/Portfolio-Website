import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Layout/Navbar";

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
