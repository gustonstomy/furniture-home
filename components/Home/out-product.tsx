"use client";

import React from "react";

import { productsData } from "@/store/data";
import Products from "../products";

type Product = {
  name: string;
  description: string;
  price: string;
};

export default function OutProducts() {
  return (
    <section className="mt-[56px]">
      <div className="w-full flex items-center justify-center text-[32px]  font-bold text-[#333333]">
        Our Products
      </div>
      <Products productsData={productsData} />
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
