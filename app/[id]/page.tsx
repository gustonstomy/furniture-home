"use client";

import ProductSlider from "@/components/product/ProductSlider";
import React from "react";
import ProductDetails from "@/components/product/productDetails";
import Products from "@/components/products";
import Footer from "@/components/footer";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import ProductTabs from "@/components/product/productTabs";

export default function Pages({ params }: { params: { product: string } }) {
  const productImages = [
    "/images/OutdoorSlider5.svg",
    "/images/OutdoorSlider3.svg",
    "/images/OutdoorSlider4.svg",
    "/images/OutdoorSlider2.svg",
  ];
  const productsData = [
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      imageUrl: "/images/image1.svg",
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish living room set",
      price: "Rp 5.000.000",
      imageUrl: "/images/image2.svg",
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 5.000.000",
      imageUrl: "/images/image3.svg",
    },
    {
      id: 4,
      name: "Respira",
      description: "Outdoor bar table",
      price: "Rp 3.500.000",
      imageUrl: "/images/image4.svg",
    },
  ];
  return (
    <div className="">
      <div className="p-[3rem] md:p-[4rem] mb-[2rem] bg-[#F9F1E7] ">
        <Breadcrumb />
      </div>
      <section className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:p-[20px] max-w-[380px] sm:max-w-[680px] md:max-w-[900px]  lg:max-w-[1300px] mx-auto ">
        <div>
          <ProductSlider images={productImages} productId={"1"} />
        </div>
        <div>
          {" "}
          <ProductDetails />
        </div>
      </section>
      <div className="py-[100px]">
        <ProductTabs />
      </div>

      <div className="w-full flex items-center justify-center text-[32px]  font-bold text-[#333333]">
        Our Products
      </div>
      <Products productsData={productsData} />
      <div className="w-full flex items-center justify-center">
        <div className="w-full px-[2rem] md:w-[20%] md:px-0 xl:w-[10%] mb-[104px]">
          <button className="bg-white cursor-pointer w-full border border-[#B88E2F] hover:bg-[#B88E2F] hover:text-[#FFFFFF] text-[#B88E2F] font-semibold text-[12px] sm:text-[16px]  leading-1.5 rounded-[10px] py-[16px] lg:py-[18px] px-[10px]  z-20">
            Show more
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
