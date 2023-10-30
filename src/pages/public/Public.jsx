/** @format */
import { Outlet } from "react-router-dom";
import { TopHeader, Header, Navigation, Footer } from "../../components";
const Public = () => {
  return (
    <div className="w-full flex flex-col items-center  ">
      <TopHeader />
      <Header />
      <Navigation />
      <div className="w-main ">
        <Outlet />
      </div>
      <Footer />
      <div className="h-[1000px]"></div>
    </div>
  );
};

export default Public;
