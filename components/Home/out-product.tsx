import Image from "next/image";
import React from "react";

export default function OutProducts() {
  const products = [
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
    {
      id: 5,
      name: "Grifo",
      description: "Night lamp",
      price: "Rp 3.500.000",
      imageUrl: "/images/image5.svg",
    },
    {
      id: 6,
      name: "Muggo ",
      description: "Small mug",
      price: "Rp 3.500.000",
      imageUrl: "/images/image6.svg",
    },
    {
      id: 7,
      name: "Pingky",
      description: "Cute bed set",
      price: "Rp 3.500.000",
      imageUrl: "/images/image7.svg",
    },
    {
      id: 8,
      name: "Potty",
      description: "Minimalist flower pot",
      price: "Rp 3.500.000",
      imageUrl: "/images/image8.svg",
    },
  ];
  return (
    <section className="mt-[56px] mb-[56rem]">
      <div className="w-full flex items-center justify-center text-[32px]  font-bold text-[#333333]">
        Our Products
      </div>
      <div className="  items-center grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-4  rounded-[20px]  lg:p-[20px] max-w-[380px] sm:max-w-[680px] md:max-w-[700px]  lg:max-w-[1300px] mx-auto">
        {/* Map through products */}
        {products.map((product) => (
          <div key={product.id} className="relative mx-auto p-2 group">
            {/* Overlay element */}
            <div className="absolute inset-0 rounded-xl p-2 bg-[#3A3A3A] opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10 pointer-events-none"></div>

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
        {/* Example of a single product */}

        {/* <div className="relative flex flex-col gap-4  group">
          <div className="absolute inset-0 bg-[#3A3A3A] opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10 pointer-events-none"></div>

      
          <div className="relative h-[500px]  w-[400px]">
            <Image
              src="/images/image1.svg"
              alt="Browse"
              fill
              sizes="100%"
              className=" object-cover"
              priority
            />
          </div>
          <div className="absolute top-10 right-10 bg-[#E97171] rounded-full h-10 flex w-10 items-center justify-center text-[12px] text-center text-[#FFFFFF]">
            -36%
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[24px] font-semibold leading-[36px] text-[#333333]">
              Syltherine
            </p>
            <p className="text-[24px] font-[400] leading-[36px] text-[#333333]">
              Stylish cafe chair
            </p>
            <p className="text-[24px] font-semibold leading-[36px] text-[#333333]">
              Rp 2.500.000
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
