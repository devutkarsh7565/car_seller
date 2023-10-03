import { ICarType } from "@/types/CarTypes";
import Image from "next/image";
import React, { FC } from "react";
import { MdPeopleAlt } from "react-icons/md";
import { GiFuelTank } from "react-icons/gi";
import { IoSpeedometer } from "react-icons/io5";
import { TbSteeringWheel } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { getRandomFloat } from "@/utils/randomFunction";
interface ICard {
  singleCarData: ICarType;
}

const Card: FC<ICard> = ({ singleCarData }) => {
  const randomFloat = getRandomFloat(1.5, 10.5, 100).toFixed(0);
  const randomFloat2 = getRandomFloat(1.5, 10.5, 1).toFixed(1);

  const imgUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg/400px-2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg";
  return (
    <div className="bg-secondary flex flex-col p-4 shadow-md rounded-xl gap-3 text-black">
      <div className="relative w-full h-[200px]">
        {singleCarData?.image ? (
          <Image
            src={singleCarData?.image || imgUrl}
            alt=""
            layout="fill"
            className="object-cover rounded-xl"
          />
        ) : (
          <Image
            src={imgUrl}
            alt=""
            layout="fill"
            className="object-cover rounded-xl"
          />
        )}
      </div>
      <div className="flex justify-between w-full ">
        <h1 className="text-xl tracking-wide">{singleCarData?.title}</h1>
        {singleCarData?.start_production ? (
          <h1 className="px-3 py-1 border-dashed border-blue-400 border rounded-full">
            {singleCarData?.start_production}
          </h1>
        ) : (
          <h1 className="px-3 py-1 border-dashed border-blue-400 border rounded-full">
            1975
          </h1>
        )}
      </div>
      <div className="grid w-full grid-cols-2 gap-y-2 text-black/80">
        <div className="flex gap-2 items-center">
          <MdPeopleAlt className="text-blue-400" />
          <h1>4 People</h1>
        </div>
        <div className="flex gap-2 items-center">
          <GiFuelTank className="text-blue-400" />
          {randomFloat <= "200" ? <h1>Gasoline</h1> : <h1>Hybrid</h1>}
        </div>
        <div className="flex gap-2 items-center">
          <IoSpeedometer className="text-blue-400" />
          <h1>{randomFloat2}/1-litre</h1>
        </div>
        <div className="flex gap-2 items-center">
          <TbSteeringWheel className="text-blue-400" />
          <h1>4 Automatic</h1>
        </div>
      </div>
      <div className="border-t border-gray-300 pt-3 flex justify-between w-full text-black">
        <h1 className="text-2xl">
          ${randomFloat}/<span className="text-base text-black/80">month</span>
        </h1>
        <div className="flex gap-3 items-center">
          <div className="p-2 rounded-md bg-blue-100 cursor-pointer">
            <AiOutlineHeart className="text-blue-500 text-lg" />
          </div>
          <button className="bg-blue-400 px-4 py-2 text-white rounded-xl font-medium">
            Rent now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
