"use client";

import { BreadcrumbWithCustomSeparator } from "@/components/breadcrumbs";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CartPage from "@/components/cart/CartPage";
import FeatureHighlights from "@/components/shop/featureHighlights";
import Footer from "@/components/footer";

export default function Page() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);
  return (
    <section>
      <div className="relative flex flex-col items-center justify-center">
        <div className="flex items-center justify-center w-full h-[200px] sm:h-[250px] lg:h-[350px] bg-gray-200">
          <Image
            src="/images/banner.svg"
            alt="Shop Banner"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div
          className={`absolute flex flex-col items-center justify-center z-10 transition-all duration-900 ease-out transform ${
            isAnimated
              ? "top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-100"
              : "top-0 translate-y-0 left-1/2 -translate-x-1/2 opacity-0"
          }`}
        >
          <Image
            alt="house"
            src="/images/houseL.svg"
            width={50}
            height={50}
            className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]"
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-2 sm:mb-4">
            About
          </h1>
          <BreadcrumbWithCustomSeparator title="About" />
        </div>
      </div>
      <CartPage />
      <FeatureHighlights />
      <Footer />
    </section>
  );
}
