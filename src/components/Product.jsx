/** @format */
import { formatMoney, renderStars } from "../ultils/helper";

import trending from "../assets/images/trending.png";
import newImage from "../assets/images/new.png";
import SlideOption from "./SlideOption";
import icons from "../ultils/icons";
const { HiMenu, AiFillHeart, FaEye } = icons;
const Product = ({ productData, isActive, sizeImage, showDes }) => {
  return (
    <div className="group cursor-pointer  bg-white z-10 relative w-full  flex flex-col border-solid border-[1px] border-[#ebebeb] text-[16px] text-[#2b3743]">
      <div>
        <img
          src={
            productData?.thumb ||
            "https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150544961.jpg?w=740&t=st=1698167331~exp=1698167931~hmac=0c23ae6263688c5c733f7ebf4bdd37883952dcc3ef7cea365dcb57aa9396ff74"
          }
          className={`w-full h-full object-contain pt-[15px] px-[15px] h-[${sizeImage}px] ${
            showDes ? "group-hover:invisible" : ""
          } `}
        />
        {showDes && (
          <div
            className={`w-full bg-white absolute top-0 left-0 right-0 bottom-0 group-hover:opacity-100 opacity-0 transition-opacity ease-in-out duration-200`}
          >
            <div className="flex justify-between py-5 border-b border-solid  border-[#ebebeb]  px-5 ">
              <span className="line-clamp-1 leading-4">
                {productData?.title}
              </span>
              <span className="text-[#333] text-right">
                {formatMoney(productData?.price)}
                <br />
                VND
              </span>
            </div>
            <ul className="p-5">
              {productData?.description.map((el, index) => (
                <li
                  className="text-[#505050] text-[13px] leading-5"
                  key={index}
                >
                  {el}
                </li>
              ))}
            </ul>
          </div>
        )}
        <img
          className={`absolute top-[15px] right-[15px] w-[75px] h-[25px] ${
            showDes ? "group-hover:hidden" : ""
          }`}
          src={isActive === 1 ? trending : newImage}
          alt="label"
        />
        <div
          className={`${
            showDes ? "justify-start px-5" : "justify-center"
          } flex gap-[12px]   opacity-0 group-hover:opacity-100 group-hover:translate-y-[-20px] duration-500   transition-all ease-in-out  z-1 translate-y-[30px] `}
        >
          <SlideOption icon={<AiFillHeart size={16} />} />
          <SlideOption icon={<HiMenu size={16} />} />
          <SlideOption icon={<FaEye size={16} />} />
        </div>
      </div>
      <div
        className={`${
          showDes ? "group-hover:invisible" : ""
        } flex flex-col gap-[10px] bg-white z-10 mb-[10px] px-[15px] pb-[15px]`}
      >
        <span className="line-clamp-1 leading-4">{productData?.title}</span>
        <div className="flex">
          {renderStars(productData?.totalRating).map((star, index) => (
            <span key={index}>{star}</span>
          ))}
        </div>
        <span className="text-[#333]">
          {formatMoney(productData?.price)} VND
        </span>
      </div>
    </div>
  );
};

export default Product;
