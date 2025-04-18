"use client";

import Image from "next/image";
import React from "react";
import { icons } from "../icons";
import { productsData } from "@/store/data";

export default function OutProducts() {
  const handleAddToCart = () => {
    console.log("Added to cart");
  };
  return (
    <section className="mt-[56px]">
      <div className="w-full flex items-center justify-center text-[32px]  font-bold text-[#333333]">
        Our Products
      </div>
      <div className="  items-center grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-4  rounded-[20px]  lg:p-[20px] max-w-[380px] sm:max-w-[680px] md:max-w-[700px]  lg:max-w-[1300px] mx-auto">
        {/* Map through products */}
        {productsData.map((product) => (
          <div key={product.id} className="relative mx-auto p-2 group ">
            {/* Overlay element */}
            <div className="absolute inset-0 rounded-xl p-2 bg-[#3A3A3A] opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10 pointer-events-none"></div>
            <div className="absolute pr-[2.5rem] pl-[1.5rem] w-full  top-[30%]  rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 ">
              <button
                onClick={handleAddToCart}
                className="bg-white cursor-pointer w-full text-[#B88E2F] font-semibold text-[12px] sm:text-[16px]  leading-1.5 rounded-[10px] py-[16px] lg:py-[18px] px-[10px]  z-20"
              >
                Add to Cart
              </button>
            </div>

            <div className="absolute  flex justify-between pr-[1.5rem] pl-[1rem] w-full  top-[42%]  rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ">
              <div className="flex gap-1">
                <icons.Share className="text-[#FFFFFF] text-[12px] h-5 w-5 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
                <p className="text-[#FFFFFF] text-[16px] cursor-pointer sm:text-[12px] xl:text-[16px] font-semibold">
                  Share
                </p>
              </div>
              <div className="flex gap-1">
                <icons.ArrowsForward className="text-[#FFFFFF] text-[12px] h-5 w-5 sm:h-4 sm:w-4 xl:h-5 lg:w-5" />
                <p className="text-[#FFFFFF] text-[16px] cursor-pointer sm:text-[12px] xl:text-[16px]  font-semibold">
                  Compare
                </p>
              </div>
              <div className="flex gap-1">
                <icons.Heart className="text-[#FFFFFF] text-[12px] h-5 w-5 sm:h-4 sm:w-4 xl:h-5 lg:w-5" />
                <p className="text-[#FFFFFF] text-[16px] cursor-pointer sm:text-[12px] xl:text-[16px]  font-semibold">
                  Like
                </p>
              </div>
            </div>
            {/* Content */}
            <div className="   relative h-[350px] sm:h-[300px] w-[350px] sm:w-[220px] md:w-[230px] xl:w-[280px] rounded-[20px]">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                sizes="100%"
                className="object-cover rounded-[10px]"
                priority
              />
            </div>
            <div className="absolute top-10 right-10 bg-[#E97171] rounded-full h-10 flex w-10 items-center justify-center text-[12px] text-center text-[#FFFFFF]">
              -36%
            </div>
            <div className="flex flex-col xl:gap-2">
              <p className="mt-4 text-[24px] sm:text-[18px] xl:text-[24px] font-semibold leading-[36px] text-[#333333]">
                {product.name}
              </p>
              <p className="text-[24px] sm:text-[18px] xl:text-[24px] font-[400] leading-[36px] text-[#333333]">
                {product.description}
              </p>
              <p className="mb-6 text-[24px] sm:text-[18px] xl:text-[24px] font-semibold leading-[36px] text-[#333333]">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-full px-[2rem] md:w-[20%] md:px-0 xl:w-[10%]">
          <button className="bg-white cursor-pointer w-full border border-[#B88E2F] hover:bg-[#B88E2F] hover:text-[#FFFFFF] text-[#B88E2F] font-semibold text-[12px] sm:text-[16px]  leading-1.5 rounded-[10px] py-[16px] lg:py-[18px] px-[10px]  z-20">
            Show more
          </button>
        </div>
      </div>
    </section>
  );
}
