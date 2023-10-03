import React, { FC } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";

export interface IPagination {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pageCount: number;
}

const Pagination: FC<IPagination> = ({ page, setPage, pageCount }) => {
  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => prev - 1);
  console.log(pageCount, "pageCount");

  const pagesArray = [];

  for (let i = 1; i <= pageCount; i++) {
    pagesArray.push(i);
  }
  console.log(pagesArray, "array");

  return (
    <>
      <div className="flex text-black gap-2">
        <button
          className={`bg-gray-200 p-3 ${
            page === 1 ? "text-gray-300" : "text-black"
          }`}
          onClick={prevPage}
          disabled={page === 1}
        >
          <MdArrowBackIosNew />
        </button>{" "}
        {pagesArray.map((pg) => (
          <button
            key={pg}
            onClick={() => setPage(pg)}
            // disabled={}
            className={`rounded-md py-3 px-4 ${
              page == pg
                ? "bg-blue-400 text-white"
                : "bg-gray-200 hover:bg-gray-300 duration-300"
            }`}
          >
            {pg}
          </button>
        ))}{" "}
        <button
          onClick={nextPage}
          disabled={page === pageCount}
          className={`bg-gray-200 p-3 ${
            page === pageCount ? "text-gray-300" : "text-black"
          }`}
        >
          <MdOutlineArrowForwardIos />
        </button>
      </div>
    </>
  );
};

export default Pagination;
