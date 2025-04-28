"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

import Image from "next/image";
import { useCartDrawer } from "@/store";
import { handleAddToCart } from "@/lib/functions";

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="px-6 space-y-2">
      {/* Product Title */}
      <div>
        <h1 className="text-[42px] md:text-[30px] lg:text-[42px] text-black font-bold">
          Asgaard sofa
        </h1>
        <p className="text-[#9F9F9F] font-medium text-2xl md:text-xl lg:text-2xl mt-2">
          Rs. 250,000.00
        </p>
      </div>

      <div className="flex items-center gap-2 text-yellow-500">
        <div className="flex">
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
        </div>
        <div className="h-10 border-l-2 "></div>
        <span className="text-[#9F9F9F] text-sm ml-2">5 Customer Review</span>
      </div>

      {/* Description */}
      <p className="text-black text-lg md:text-[13px]">
        Setting the bar as one of the loudest speakers in its class, the Kilburn
        is a compact, stout-hearted hero with a well-balanced audio which boasts
        a clear midrange and extended highs for a sound.
      </p>

      {/* Sizes */}
      <div>
        <h3 className="text-[#9F9F9F] text-[14px] mt-4 mb-2">Size</h3>
        <div className="flex gap-4">
          <button className="px-4 py-2 border rounded bg-[#b7903c] text-white font-semibold">
            L
          </button>
          <button className="px-4 py-2 border rounded bg-[#f9f3e8]">XL</button>
          <button className="px-4 py-2 border rounded bg-[#f9f3e8]">XS</button>
        </div>
      </div>

      {/* Colors */}
      <div>
        <h3 className="text-[#9F9F9F] text-[14px] mt-4 mb-2">Color</h3>
        <div className="flex gap-4">
          <div className="w-6 h-6 rounded-full bg-purple-500 cursor-pointer" />
          <div className="w-6 h-6 rounded-full bg-black cursor-pointer" />
          <div className="w-6 h-6 rounded-full bg-[#b7903c] cursor-pointer" />
        </div>
      </div>

      {/* Quantity and Buttons */}
      <div className="flex items-center gap-4 mt-6 w-full">
        <div className="flex items-center justify-between px-4 border rounded-xl overflow-hidden w-full  ">
          <button onClick={handleDecrease} className="md:px-2 py-4">
            <Minus />
          </button>
          <span className="px-4">{quantity}</span>
          <button onClick={handleIncrease} className="md:px-2 py-4">
            <Plus />
          </button>
        </div>
        <div className="w-full ">
          <button
            onClick={handleAddToCart}
            className="flex-1 text-[12px] md:text-[20px] w-full border-2 border-black py-4 rounded-xl font-semibold hover:bg-black hover:text-white transition"
          >
            Add To Cart
          </button>
        </div>
        <div className="w-full ">
          <button className="flex-1 text-[12px] md:text-[20px]  w-full border-2 border-black py-4 rounded-xl font-semibold hover:bg-black hover:text-white transition">
            Compare
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t my-6" />

      {/* Product Info */}
      <div className="flex">
        <div>
          <p className="text-[16px] mr-8 text-[#9F9F9F]">SKU</p>
          <p className="text-[16px] mr-8 text-[#9F9F9F]">Category</p>
          <p className="text-[16px] mr-8 text-[#9F9F9F]">Tags</p>
        </div>
        <div className="">
          <p className="text-[16px] mr-8 text-[#9F9F9F]">
            <span className="pr-3">:</span>SS001
          </p>
          <p className="text-[16px] mr-8 text-[#9F9F9F]">
            <span className="pr-3">:</span>Sofas
          </p>
          <p className="text-[16px] mr-8 text-[#9F9F9F]">
            <span className="pr-3">:</span> Sofa, Chair, Home, Shop
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <span className="font-semibold text-black">Share:</span>

        <Image
          alt="img"
          src={"/icons/facebook.svg"}
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <Image
          alt="img"
          src={"/icons/linkedin.svg"}
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <Image
          alt="img"
          src={"/icons/X.svg"}
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
