/** @format */

import React, { memo } from "react";
import usePagination from "../../hooks/usePagination";
import PaginaItem from "./PaginaItem";

const Pagination = ({ currentPage, totalPaginate }) => {
  const paginateArr = usePagination(66, 1);
  return (
    <>
      <nav>
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
