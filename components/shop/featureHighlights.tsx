import React from "react";
import { Trophy, CheckCircle, Truck, Headphones } from "lucide-react";
import Image from "next/image";

export default function FeatureHighlights() {
  const features = [
    {
      icon: "icons/trophy.svg",
      title: "High Quality",
      desc: "crafted from top materials",
    },
    {
      icon: "icons/customer-support.svg",
      title: "24 / 7 Support",
      desc: "Dedicated support",
    },
    {
      icon: "icons/guarantee.svg",
      title: "Warranty Protection",
      desc: "Over 2 years",
    },
    {
      icon: "icons/shipping.svg",
      title: "Free Shipping",
      desc: "Order over 150 $",
    },
  ];

  return (
    <div className=" bg-[#fef6ed] w-full px-4  py-4 sm:py-6 lg:py-16 md:py-8 xl:py-24   lg:px-4 xl:px-34  rounded-lg shadow-md ">
      <div className=" flex-wrap justify-between items-center sm:space-y-8 space-y-6 md:space-y-12 lg:space-y-0 ml-4 sm:ml-[3rem] md:pl-[5rem] grid grid-cols-2 lg:flex ">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-4 w-full md:w-auto">
            <div className="flex items-center justify-center lg:w-[40px] xl:w-[50px] lg:h-[40px] xl:h-[50px] ">
              <Image
                alt="img"
                src={feature?.icon}
                width={50}
                height={50}
                className="object-cover"
              />
            </div>
            <div className="">
              <h4 className="text-[#242424] font-semibold lg:text-[16px] xl:text-[25px]">
                {feature.title}
              </h4>
              <p className="lg:text-[14px] xl:text-[20px] font-medium text-[#898989]">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
