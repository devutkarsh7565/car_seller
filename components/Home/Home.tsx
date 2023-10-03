import React, { useState } from "react";
import data from "../../db.json";
import { ICarType } from "@/types/CarTypes";
import Card from "../Cards/Card";
import Pagination from "../Pagination/Pagination";

const Home = () => {
  const modifiedData = data?.slice(0, 60) as ICarType[];
  const [page, setPage] = useState<number>(1);
  const pageData = page * 6;
  const pageCount = Math.round(modifiedData?.length / 6);
  return (
    <div className="flex justify-center w-full">
      <div className="w-full py-24 flex flex-col gap-10 px-10 text-black max-w-[1150px] min-w-[1150px] ">
        <div className="grid w-full grid-cols-3 gap-5">
          {pageData <= modifiedData?.length &&
            modifiedData
              ?.slice(pageData, pageData + 6)
              ?.map((item) => <Card key={item?.image} singleCarData={item} />)}
        </div>
        <div className="p-4 flex justify-between items-center shadow-md rounded-xl">
          <h1 className="text-black/80">
            {pageData} from {modifiedData?.length}
          </h1>
          <Pagination page={page} setPage={setPage} pageCount={pageCount-1} />
        </div>
      </div>
    </div>
  );
};

export default Home;
