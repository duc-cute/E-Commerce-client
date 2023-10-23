/** @format */
import { SideBar, Banner } from "../../components";
const Home = () => {
  return (
    <div className="w-main border flex mt-5 px-5">
      <div className="flex flex-col gap-5 w-[25%] flex-auto">
        <SideBar />
        <span>Daily Deals</span>
      </div>
      <div className="flex flex-col gap-5 pl-5 w-[75%]  flex-auto">
        <Banner />
        <span>Best seller</span>
      </div>
    </div>
  );
};

export default Home;
