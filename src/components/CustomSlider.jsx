/** @format */
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 3000,
  className: "custom-slicer",
};
import Slider from "react-slick";
import Product from "./Product";
import { memo } from "react";
const CustomSlider = ({ products, isActive, sizeImage, showDes }) => {
  return (
    <>
      {products && (
        <Slider {...settings}>
          {products?.map((item) => (
            <Product
              key={item._id}
              productData={item}
              isActive={isActive}
              sizeImage={sizeImage}
              showDes={showDes}
            />
          ))}
        </Slider>
      )}
    </>
  );
};

export default memo(CustomSlider);
