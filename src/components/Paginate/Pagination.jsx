/** @format */

import React, { memo } from "react";
import usePagination from "../../hooks/usePagination";
import PaginaItem from "./PaginaItem";
import { useSearchParams } from "react-router-dom";

const Pagination = ({ totalCount }) => {
  const [params] = useSearchParams();
  const page = +params.get("page");
  const limit = +import.meta.env.VITE_PROD_LIMIT;
  const paginateArr = usePagination(totalCount, page);
  return (
    <>
      <nav className="flex justify-between items-center">
        {!page ? (
          <span className="text-sm text-gray-700 ">
            Showing <span className="font-semibold text-gray-900 ">1</span> to
            <span className="font-semibold text-gray-900 ">
              {" "}
              {Math.min(limit, totalCount)}
            </span>{" "}
            of
            <span className="font-semibold text-gray-900 ">
              {" "}
              {totalCount}
            </span>{" "}
            Products
          </span>
        ) : (
          <span className="text-sm text-gray-700 ">
            Showing{" "}
            <span className="font-semibold text-gray-900 ">
              {(page - 1) * limit + 1}
            </span>{" "}
            to
            <span className="font-semibold text-gray-900 ">
              {" "}
              {Math.min(page * limit, totalCount)}
            </span>{" "}
            of
            <span className="font-semibold text-gray-900 ">
              {" "}
              {totalCount}
            </span>{" "}
            Products
          </span>
        )}
        <ul className="inline-flex -space-x-px text-base h-10">
          {paginateArr?.map((el, index) => (
            <li key={index}>
              <PaginaItem>{el}</PaginaItem>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default memo(Pagination);
