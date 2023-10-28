/** @format */
import {
  SideBar,
  Banner,
  BestSeller,
  Daily,
  FeatureProducts,
} from "../../components";

const Home = () => {
  return (
    <>
      <div className="w-main  flex mt-5 px-5 ">
        <div className="flex flex-col gap-[30px] w-[25%] ">
          <SideBar />
          <Daily />
        </div>
        <div className="flex flex-col gap-[30px] pl-5 w-[75%]  flex-auto">
          <Banner />
          <BestSeller />
        </div>
      </div>
      <div className="w-main px-5 mt-5">
        <FeatureProducts />
      </div>
    </>
  );
};

export default Home;
