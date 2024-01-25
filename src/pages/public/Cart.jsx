/** @format */

import React, { useCallback, useState } from "react";
import withBaseComponent from "../../hocs/withBaseComponent";
import { BreadCrumb, SelectQuantity, Varriant } from "../../components";
import { useSelector } from "react-redux";
import icons from "../../ultils/icons";
import { Link } from "react-router-dom";
import path from "../../ultils/path";
import { formatMoney } from "../../ultils/helper";
const { FaRegHeart, FiTrash2, GrPrevious } = icons;
const Cart = () => {
  const { current } = useSelector((state) => state.user);
  const [quantity, setQuantity] = useState(1);

  const handleChangeQuantity = useCallback(
    (action) => {
      if (action === "minus" && quantity == 1) return;
      if (action === "minus") setQuantity((prev) => +prev - 1);
      if (action === "plus") setQuantity((prev) => +prev + 1);
    },
    [quantity]
  );
  const handleQuantity = useCallback(
    (number) => {
      if (!Number(number) || Number(number) < 1) {
        return;
      } else setQuantity(number);
    },
    [quantity]
  );
  console.log("cur", current.cart);
  return (
    <div className="w-full   flex flex-col items-center pb-16">
      <div className="w-full flex justify-center px-[20px] py-[15px] mb-[20px]  bg-[#f7f7f7] ">
        <div className="w-main px-[20px] flex flex-col items-start">
          <h1 className="text-[18px] text-[#151515] font-semibold leading-5">
            My Cart
          </h1>
          <BreadCrumb title={"Home"} category={"my-cart"} />
        </div>
      </div>
      <div className="flex justify-center  w-full  ">
        <div className="flex gap-7 w-main px-[20px] py-[15px] mb-[20px]">
          <div className="flex-5 border-solid border-[#f6f6f6] border rounded-[20px] p-7">
            {current?.cart.map((el, index) => (
              <div className="">
                <article className="flex gap-7">
                  <a className="w-[175px] h-[175px] " href="/">
                    <img
                      src={el?.thumb}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </a>
                  <div className="flex justify-between text-[18px] font-medium leading-7 flex-1">
                    <div className="flex flex-col justify-between">
                      <h3 className="max-w-[374px] ">
                        <a
                          href={`/${el?.product?.category}/${el?.product?._id}/${el?.title}`}
                          className="capitalize"
                        >
                          {el.title}
                        </a>
                      </h3>
                      <span className="flex items-center justify-between">
                        {formatMoney(el?.price)} VND
                        <p className="text-[18px] font-medium leading-6 text-main ">
                          x {el?.quantity}
                        </p>
                      </span>
                      <div className="flex gap-4">
                        {el?.color && (
                          <div className="cart-item__input">
                            <Varriant style={"py-[7px]"} color={el?.color} />
                          </div>
                        )}
                        <div className="cart-item__input">
                          <SelectQuantity
                            handleChangeQuantity={handleChangeQuantity}
                            handleQuantity={handleQuantity}
                            quantity={quantity}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between ">
                      <p className="font-bold text-[22px] text-right">$47.00</p>
                      <div className="flex gap-7 text-[18px] text-[#9E9DA8]">
                        <button className="flex gap-[10px] items-center">
                          <FaRegHeart size={20} />
                          Save
                        </button>
                        <button
                          className="flex gap-[10px] items-center"
                          toggle-target="#delete-confirm"
                        >
                          <FiTrash2 size={20} />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
                <div className="bg-[#D2D1D6] h-[1px] w-full my-7"></div>
              </div>
            ))}

            <div className="flex justify-between items-end font-medium">
              <Link to={`/${path.HOME}`} className="flex gap-3  flex-3 group">
                <span className="translate-x-1 group-hover:translate-x-[0] transition-transform duration-200 ease-in-out">
                  <GrPrevious />
                </span>
                <span>Continue Shopping</span>
              </Link>
              <div className="flex flex-col gap-5 font-lato text-[18px] flex-2 ">
                <div className="flex justify-between ">
                  <span className="font-medium">Subtotal:</span>
                  <span className="font-medium">1000 VND</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Texes:</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="bg-[#D2D1D6] h-[1px] w-full my-4"></div>

                <div className="flex justify-between font-semibold font-main">
                  <span className="">Total Price</span>
                  <span className="">$415.99</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-2 border-solid border-[#f6f6f6] border rounded-[20px]">
            Check
          </div>
        </div>
      </div>
    </div>
  );
};

export default withBaseComponent(Cart);
