import React from "react";
import { SlidersHorizontal, Grid3x3, List } from "lucide-react";

export default function FilterBar() {
  return (
    <div className="mb-[46px] shadow-sm bg-[#F9F1E7] w-full py-4 px-4 lg:px-16 border-2 lg:py-8 flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-14 lg:gap-4 text-sm xl:px-[6rem] 2xl:px-[21rem]">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 text-black font-regular text-[16px]">
          <SlidersHorizontal className="w-5 h-5" />
          Filter
        </button>
        <div className="flex items-center gap-2">
          <Grid3x3 className="w-5 h-5 text-black" />
          <List className="w-5 h-5 text-black" />
        </div>
        <div className="h-6 w-px bg-gray-300 mx-2" />
        <span className="text-black text-[16px] font-regular">
          Showing 1–16 of 32 results
        </span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-black font-regular text-[16px] ">Show</span>
          <input
            type="text"
            value="16"
            readOnly
            className="w-10 h-10 lg:w-14 lg:h-14 bg-white  text-center  text-[#9F9F9F] text-[20px] font-regular"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-black font-regular text-[16px] ">Short by</span>
          <select className="h-10 lg:h-14 px-4 bg-white border-none text-[#9F9F9F] text-[16px]  font-regular ">
            <option>Default</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>
    </div>
  );
}
