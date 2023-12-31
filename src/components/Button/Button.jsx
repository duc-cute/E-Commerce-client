/** @format */
import { memo } from "react";
const Button = ({ children, handleOnClick, style, type = "button" }) => {
  return (
    <button
      type={type}
      className={`px-4 py-3  text-white font-semibold rounded-md hover:opacity-90 ${
        style ? `${style}` : "bg-[#FFB700]"
      } `}
      onClick={() => {
        handleOnClick && handleOnClick();
      }}
    >
      {children}
    </button>
  );
};

export default memo(Button);
