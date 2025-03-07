import { NavLink, Outlet } from "react-router-dom";
import "./LayoutDefault.scss"
import Header from "./Header";
import Footer from "./Footer";

function LayoutDefault() {


    return (
        <div className="layout-default">
            <Header />
            <main className="layout-default__main"><Outlet /></main>
            <Footer />

        </div>
    );
}

export default LayoutDefault;