import { Outlet } from "react-router-dom";
import Header from "../pages/SharedPages/Header/Header";
import Footer from "../pages/SharedPages/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="w-[1140px] mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;