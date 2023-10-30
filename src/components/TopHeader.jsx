/** @format */

import { memo } from "react";
import { Link } from "react-router-dom";
import path from "../ultils/path";

const TopHeader = () => {
  return (
    <div className="w-full flex justify-center  h-[38px] bg-main text-[12px] text-white">
      <div className="w-main p-[10px] flex justify-between px-5">
        <span>ORDER ONLINE OR CALL US (+1800) 000 8808</span>
        <Link to={`/${path.LOGIN}`}>Sign In or Create Account</Link>
      </div>
    </div>
  );
};

export default memo(TopHeader);
