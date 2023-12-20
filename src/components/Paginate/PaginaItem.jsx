/** @format */

import React, { memo } from "react";
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

const PaginaItem = ({ children }) => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { category } = useParams();
  const handlePagination = () => {
    let param = [];
    for (let i of params.entries()) param.push(i);
    const queries = {};
    for (let i of params) queries[i[0]] = i[1];
    if (Number(children)) queries.page = children;
    navigate({
      pathname: `/${category}`,
      search: createSearchParams(queries).toString(),
    });
  };
  return (
    <button
      className={`${
        Number(children)
          ? "items-center hover:bg-gray-100 hover:text-main"
          : "items-end pb-2 cursor-default"
      } ${
        +params.get("page") === children ||
        (!Number(params.get("page")) && +children === 1)
          ? " bg-gray-100 text-main"
          : "bg-white"
      }  border-none flex  justify-center px-4 h-10 leading-tight text-[#333]    `}
      type="button"
      disabled={!Number(children)}
      onClick={handlePagination}
    >
      {children}
    </button>
  );
};

export default memo(PaginaItem);
