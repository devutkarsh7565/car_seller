import Image from "next/image";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDebounce } from "@/hooks/useDebounce";
import data from "../db.json";
import { ICarType } from "@/types/CarTypes";
import { getRandomFloat } from "@/utils/randomFunction";

const Header = () => {
  const [inputText, setInputText] = useState<string>("");
  const debouncedSearchValue = useDebounce(inputText, 500);
  const modifiedData = data?.slice(0, 200) as ICarType[];
  const filterData = modifiedData?.filter((item) =>
    item?.title?.toLowerCase()?.includes(debouncedSearchValue?.toLowerCase())
  );

  console.log(filterData, "filterData");

  const randomFloat = getRandomFloat(1.5, 10.5, 100).toFixed(0);

  return (
    <div className="w-full flex justify-center bg-primary z-40">
      <div className="min-w-[1150px] max-w-[1150px] w-full flex flex-col  fixed top-4 z-30">
        <div className="bg-secondary py-4 px-3  shadow-md rounded-xl w-full">
          <div className="md:w-[400px] max-w-xl bg-white py-3 px-4 rounded-full text-lg flex justify-between w-full">
            <input
              type="text"
              placeholder="Type Your text"
              className="bg-white outline-none text-black"
              onChange={(e) => setInputText(e.target.value)}
              value={inputText}
            />
            <BsSearch className="text-gray-700 text-xl" />
          </div>
        </div>
        {inputText.length > 0 && filterData && filterData?.length > 0 && (
          <div className="w-full z-30 text-black  bg-white fixed top-[101px] max-w-[1150px] rounded-b-xl">
            {filterData?.slice(0, 5)?.map((item) => (
              <div className="py-4 px-6 border-b border-gray-200 flex gap-5 cursor-pointer">
                <div className="w-24 h-16 relative">
                  <Image
                    src={item?.image}
                    alt=""
                    layout="fill"
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h1>{item?.title}</h1>
                  <h1 className="text-2xl">
                    ${randomFloat}/
                    <span className="text-base text-black/80">month</span>
                  </h1>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
