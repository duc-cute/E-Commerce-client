/** @format */
import { memo } from "react";
const Button = ({ children, handleOnClick, style }) => {
  return (
    <button
      type="button"
      className={`px-4 py-3  text-white font-semibold rounded-md ${
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
