/** @format */
import { SideBar, Banner, BestSeller } from "../../components";

const Home = () => {
  return (
    <div className="w-main border flex mt-5 px-5 h-[2000px]">
      <div className="flex flex-col gap-5 w-[25%] flex-auto">
        <SideBar />
        <span>Daily Deals</span>
      </div>
      <div className="flex flex-col gap-[30px] pl-5 w-[75%]  flex-auto">
        <Banner />
        <BestSeller />
      </div>
    </div>
  );
};

export default Home;
