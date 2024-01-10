/** @format */

import React, { memo } from "react";

const Varriant = ({ title = "", color = "" }) => {
  return (
    <div className="text-[13px]  text-[#000000cc] py-[10px] px-[18px] border border-solid border-[#00000017] hover:text-main hover:border-main cursor-pointer transition-colors delay-50">
      <span>{`${title} ${color}`}</span>
    </div>
  );
};

export default memo(Varriant);
