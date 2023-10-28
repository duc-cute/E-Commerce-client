/** @format */
import { formatMoney, renderStars } from "../ultils/helper";

import trending from "../assets/images/trending.png";
import newImage from "../assets/images/new.png";
import SlideOption from "./SlideOption";
import icons from "../ultils/icons";
const { HiMenu, AiFillHeart, FaEye } = icons;
const Product = ({ productData, isActive }) => {
  return (
    <div className="group  bg-white z-10 relative w-full p-[15px] flex flex-col gap-5 border-solid border-[1px] border-[#ebebeb] text-[16px] text-[#2b3743]">
      <div className="h-[243px]">
        <img
          src={
            productData?.thumb ||
            "https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150544961.jpg?w=740&t=st=1698167331~exp=1698167931~hmac=0c23ae6263688c5c733f7ebf4bdd37883952dcc3ef7cea365dcb57aa9396ff74"
          }
          className="w-full h-full object-contain"
        />
        <img
          className="absolute top-[15px] right-[15px] w-[75px] h-[25px] "
          src={isActive === 1 ? trending : newImage}
          alt="label"
        />
        <div className="flex gap-[12px] justify-center  opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-500   transition-all ease-in-out  z-1 translate-y-[80px]">
          <SlideOption icon={<AiFillHeart size={16} />} />
          <SlideOption icon={<HiMenu size={16} />} />
          <SlideOption icon={<FaEye size={16} />} />
        </div>
      </div>
      <div className="flex flex-col gap-[10px] bg-white z-10 mb-[10px]">
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
