import React from "react";
import { Trophy, CheckCircle, Truck, Headphones } from "lucide-react";

export default function FeatureHighlights() {
  const features = [
    {
      icon: <Trophy className="w-6 h-6 text-black" />,
      title: "High Quality",
      desc: "crafted from top materials",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-black" />,
      title: "Warranty Protection",
      desc: "Over 2 years",
    },
    {
      icon: <Truck className="w-6 h-6 text-black" />,
      title: "Free Shipping",
      desc: "Order over 150 $",
    },
    {
      icon: <Headphones className="w-6 h-6 text-black" />,
      title: "24 / 7 Support",
      desc: "Dedicated support",
    },
  ];

  return (
    <div className="bg-[#fef6ed] w-full py-8 px-4 md:px-16">
      <div className="flex flex-wrap justify-between items-center gap-y-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-4 w-full md:w-auto">
            <div>{feature.icon}</div>
            <div>
              <h4 className="text-black font-semibold">{feature.title}</h4>
              <p className="text-sm text-gray-500">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
