import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const Layout = () => {
    return (
        <>
            <div className="bg-white dark:bg-slate-900 dark:text-slate-400">
                <Header />
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
