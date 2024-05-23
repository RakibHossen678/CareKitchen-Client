import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="font-lato">
      <div className="lg:w-11/12 mx-auto overflow-x-hidden">
        <NavBar></NavBar>
        <div className="min-h-[calc(100vh-396px)]">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
