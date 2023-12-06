/** @format */

import React, { memo } from "react";

const PaginaItem = ({ children }) => {
  return (
    <a
      href="#"
      className={`${
        Number(children) ? "items-center" : "items-end pb-2"
      } flex  justify-center px-4 h-10 leading-tight text-[#333] bg-white border border-gray-300  hover:bg-gray-100 hover:text-main`}
    >
      {children}
    </a>
  );
};

export default memo(PaginaItem);
