import React from "react";
import Image from "next/image";

export default function CoverImage() {
  return (
    <div className="relative h-[400px] md:h-[600px] lg:h-[750px] w-full ">
      <Image
        alt="cover"
        src={"/images/coverImage.svg"}
        fill
        sizes="100%"
        className=" object-cover"
        priority
      />
      <div className="  bg-[#FFF3E3] absolute top-10 md:top-58 xl:top-36 rounded-xl right-0 lg:right-20 xl:right-36 2xl:right-56 pt-[10px] xl:pt-[62px] pb-[10px] xl:pb-[37px] px-[10px] lg:px-[26px] xl:px-[39px]">
        <div className="flex flex-col gap-[5px] lg:gap-[20px] ">
          <p className="leading-[24px] text-[12px] md:text-[14px] lg:text-[16px] font-semibold text-[#333333]">
            New Arrival
          </p>
          <h1 className="text-[16px] md:text-[32px] xl:text-[52px] font-bold text-[#B88E2F] lg:leading-[65px]">
            Discover Our{" "}
          </h1>
          <h1 className="text-[16px] md:text-[32px] xl:text-[52px] font-bold text-[#B88E2F] lg:leading-[65px]">
            New Collection
          </h1>
          <p className="lg:leading-[24px]  text-[12px]  lg:text-[14px] xl:text-[18px] font-semibold text-[#333333]">
            Lorem ipsum dolor sit amet, <br className="md:hidden" />
            consectetur adipiscing elit. <br />
            Ut elit tellus, luctus nec <br className="md:hidden" />
            ullamcorper mattis.
          </p>
          <div className="w-[100px] lg:w-[300px] lg:h-[60px] my-2 xl:mt-[46px] xl:mb-[37px]">
            <button className="cursor-pointer text-[12px] lg:text-[16px] w-full font-bold text-[#FFFFFF] leading-1.5 bg-[#B88E2F] hover:bg-[#B88E0F] rounded-[10px] py-[16px] lg:py-[26px] xl:py-[40px] px-[10px] xl:px-[30px]">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
