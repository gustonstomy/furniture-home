import Image from "next/image";
import React from "react";
import { icons } from "./icons";
import CustomSheet from "./CustomSheet";
import { useSheetStore } from "@/store";
import Link from "next/link";

export default function TopNav() {
  const { closeSheet } = useSheetStore();

  return (
    <main className="w-full sticky top-0 z-50 bg-[#FFFFFF] shadow-lg">
      {" "}
      <nav className="flex justify-between items-center py-[29px] lg:py-[18px] xl:py-[24px] 2xl:py-[29px] bg-[#FFFFFF] px-[10px] lg:px-[54px] ">
        <div className="flex md:hidden cursor-pointer">
          <CustomSheet
            id="menu"
            showHeader={true}
            direction="left"
            className="w-[370px] bg-[#FFFFFF] shadow-lg"
            trigger={
              <div className="flex items-center justify-center">
                <icons.Menu className="text-black h-10 w-10" />
              </div>
            }
          >
            <div className="flex flex-col gap-[20px] pl-[2rem] mt-[2rem] bg-[#FFFFFF]">
              <Link
                href={"/"}
                onClick={() => closeSheet()}
                className="text-[#000000] font-semibold text-[16px] cursor-pointer"
              >
                Home
              </Link>
              <Link
                href={"/shop"}
                onClick={() => closeSheet()}
                className="text-[#000000] font-semibold text-[16px] cursor-pointer"
              >
                Shop
              </Link>
              <Link
                href={"/about"}
                onClick={() => closeSheet()}
                className="text-[#000000] font-semibold text-[16px] cursor-pointer"
              >
                About
              </Link>
              <Link
                href={"/contact"}
                onClick={() => closeSheet()}
                className="text-[#000000] font-semibold text-[16px] cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </CustomSheet>
          {/* <icons.Menu className="text-black h-8 w-8" /> */}
        </div>

        <div className="flex items-center ">
          <Image
            alt="house"
            src={"/images/houseL.svg"}
            width={70}
            height={70}
          />
          <h1 className="text-[#000000] font-bold text-[36px] cursor-pointer">
            Furniro
          </h1>
        </div>

        <div className="md:hidden"></div>

        <div className="hidden md:flex md:gap-[16px] xl:gap-[75px]">
          <Link
            href={"/"}
            className="text-[#000000] font-semibold text-[16px] cursor-pointer"
          >
            Home
          </Link>
          <Link
            href={"/shop"}
            className="text-[#000000] font-semibold text-[16px] cursor-pointer"
          >
            Shop
          </Link>
          <Link
            href={"/about"}
            className="text-[#000000] font-semibold text-[16px] cursor-pointer"
          >
            About
          </Link>
          <Link
            href={"/contact"}
            className="text-[#000000] font-semibold text-[16px] cursor-pointer"
          >
            Contact
          </Link>
        </div>
        <div className="hidden md:flex md:gap-[16px] xl:gap-[45px] items-center">
          <div className="relative cursor-pointer h-8 w-8">
            <Image
              alt="person"
              src={"/icons/person.svg"}
              fill
              sizes="100%"
              className="object-contain"
            />
          </div>
          <div className="relative cursor-pointer h-8 w-8">
            <Image
              alt="person"
              src={"/icons/akar-icons_search.svg"}
              fill
              sizes="100%"
              className="object-contain"
            />
          </div>
          <div className="relative cursor-pointer h-8 w-8">
            <Image
              alt="person"
              src={"/icons/akar-icons_heart.svg"}
              fill
              sizes="100%"
              className="object-contain"
            />
          </div>
          <div className="relative cursor-pointer h-8 w-8">
            <Image
              alt="person"
              src={"/icons/ant-design_shopping-cart-outlined.svg"}
              fill
              sizes="100%"
              className="object-contain"
            />
          </div>
        </div>
      </nav>
    </main>
  );
}
