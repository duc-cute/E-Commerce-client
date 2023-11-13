/** @format */

import React, { useEffect, useState } from "react";
import { apiGetProduct } from "../../apis";
import { useParams } from "react-router-dom";
import { BreadCrumb } from "../../components";
import Slider from "react-slick";
import ReactImageMagnify from "react-image-magnify";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 3000,
  className: "detail-slider",
};

const DetailProduct = () => {
  const { pid, title, category } = useParams();
  const [product, setProduct] = useState(null);
  const fetchProduct = async () => {
    const response = await apiGetProduct(pid);
    console.log("response", response);
    setProduct(response.product);
  };

  useEffect(() => {
    fetchProduct();
  }, [pid]);

  return (
    <div className="w-full   flex flex-col items-center">
      <div className="w-full flex justify-center px-[20px] py-[15px] mb-[20px]  bg-[#f7f7f7] ">
        <div className="w-main px-[20px] flex flex-col items-start">
          <h1 className="text-[18px] text-[#151515] font-semibold leading-5">
            {title}
          </h1>
          <BreadCrumb title={title} category={category} />
        </div>
      </div>
      <div className="flex w-main px-[20px]">
        <div className="flex-4   ">
          <div className="w-[458px] h-[458px] object-cover mb-[30px] border-[#e7e5e5] border-[1px] border-solid">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: product?.thumb,
                },
                largeImage: {
                  src: product?.thumb,
                  width: 1000,
                  height: 1200,
                },
              }}
            />
          </div>
          {/* <img
            className="w-[458px] h-[458px] object-cover mb-[30px] border-[#e7e5e5] border-[1px] border-solid"
            src={product?.thumb}
            alt={product?.title}
          /> */}
          <div className="w-[458px]">
            <Slider {...settings}>
              {product?.images?.map((img, index) => (
                <img
                  key={index}
                  className="  border-[#e7e5e5] border-[1px] border-solid"
                  src={img}
                  alt={product?.title}
                />
              ))}
            </Slider>
          </div>
        </div>
        <div className="flex-4">detail</div>
        <div className="flex-2">info</div>
      </div>
      <div className="h-[500px]"></div>
    </div>
  );
};

export default DetailProduct;
