/** @format */
import { memo } from "react";
const Button = ({ name, handleOnClick, style }) => {
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
      <span className="text-center">{name}</span>
    </button>
  );
};

export default memo(Button);
