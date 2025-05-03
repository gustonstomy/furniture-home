import Image from "next/image";
import React from "react";

export default function BrowseSection() {
  const products = [
    {
      name: "Dining",
      imageUrl: "/images/Dining.webp",
    },
    {
      name: "Living",
      imageUrl: "/images/livingroom.webp",
    },
    {
      name: "Bedroom",
      imageUrl: "/images/bedroom.webp",
    },
  ];
  return (
    <section>
      <div className="flex flex-col gap-1 mt-[56px] ">
        <div className="w-full flex items-center justify-center text-[32px] font-bold text-[#333333]">
          Browse The Range
        </div>
        <div className="px-2 sm:px-0 w-full flex items-center justify-center text-[20px] text-[#666666] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 xl:gap-[20px] rounded-[20px] p-[20px] max-w-[1200px] mx-auto ">
        {/* Map through products */}
        {products.map((product) => (
          <div
            key={product.name}
            className=" flex flex-col items-center justify-center gap-4  p-4 2xl:p-0"
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />
            <p className="text-[24px] font-semibold leading-[36px] mb-[1rem] sm:mb-0 text-[#333333]">
              {product.name}
            </p>
          </div>
        ))}
        {/* Example of a single product */}
      </div>
    </section>
  );
}
