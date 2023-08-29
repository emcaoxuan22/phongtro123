import React, { useContext, memo, useCallback, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

const notActive =
  "w-[46px] h-[48px] flex justify-center items-center bg-white  hover:bg-gray-300  rounded-md cursor-pointer";
const active =
  "w-[46px] h-[48px] flex justify-center items-center bg-[#E13427]  hover:bg-gray-300  rounded-md cursor-pointer";
function PageNumber({ number, currentPage, endPage }) {
  const navigate = useNavigate();

  const handleChangePage = () => {
    if (!(number === "...")) {
      navigate({
        pathname: "/",
        search: createSearchParams({
          page: endPage ? endPage : number,
        }).toString(),
      });
    }
  };
  return (
    <div
      className={number === +currentPage ? active : notActive}
      onClick={handleChangePage}
    >
      {number}
    </div>
  );
}

export default memo(PageNumber);
