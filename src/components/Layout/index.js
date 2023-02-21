import "./index.css"
import Sidebar from "../Sidebar/index";
import { Outlet } from "react-router";

const Layout = () => {
    return <div className="App">
            <Sidebar />
            <div className="page">
                <Outlet />
            </div>
            </div>
}

export default Layout;