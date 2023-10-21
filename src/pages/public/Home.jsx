/** @format */
import { SideBar, Banner } from "../../components";
const Home = () => {
  return (
    <div className="w-main border flex">
      <div className="flex flex-col gap-5 w-[30%] bg-slate-400 flex-auto">
        <SideBar />
        <span>Daily Deals</span>
      </div>
      <div className="flex flex-col gap-5 pl-5 w-[70%] bg-orange-300 flex-auto">
        <Banner />
        <span>Best seller</span>
      </div>
    </div>
  );
};

export default Home;
