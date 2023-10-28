/** @format */
import { Outlet } from "react-router-dom";
import { Banner, SideBar, Header, Navigation } from "../../components";
const Public = () => {
  return (
    <div className="w-full flex flex-col items-center  ">
      <Header />
      <Navigation />
      <div className="w-main h-[2000px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Public;
