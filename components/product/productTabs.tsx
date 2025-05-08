"use client";

import React, { useState } from "react";
import Image from "next/image";
import BlurImage from "../BlurImage";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="p-6 space-y-8 lg:p-[20px] max-w-[380px] sm:max-w-[680px] md:max-w-[700px]  lg:max-w-[1300px] mx-auto ">
      {/* Tabs */}
      <div className="flex gap-8 xl:gap-[5rem] justify-center border-b">
        {["Description", "Additional Information", "Reviews [5]"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`pb-4 text-[16px] xl:text-2xl  ${
              activeTab === tab.toLowerCase()
                ? "border-b-2 border-black font-semibold text-black"
                : "text-[#9F9F9F]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "description" && (
        <div className="space-y-[37px]">
          <div className="text-gray-500 space-y-4 text-base g:p-[20px] max-w-[340px] sm:max-w-[640px] md:max-w-[650px] mx-auto  lg:max-w-[1000px]">
            <p>
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-[#f9f1e7] flex justify-center  w-[300px] h-[300px] md:w-[400px] md:h-[300px] 2xl:w-[600px] 2xl:h-[350px] rounded-2xl">
              <BlurImage
                src={"/images/sofeLg2.svg"}
                alt="Sofa 1"
                className="object-contain  bg-[#f9f1e7] rounded-2xl"
                fill
                quality={85}
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Card 2 */}
            <div className="bg-[#f9f1e7] flex justify-center  w-[300px] h-[300px] md:w-[400px] md:h-[300px] 2xl:w-[600px] 2xl:h-[350px] rounded-2xl">
              <BlurImage
                src={"/images/sofeLg1.svg"}
                alt="Sofa 2"
                className="object-contain bg-[#f9f1e7] rounded-2xl"
                fill
                quality={85}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      )}

      {activeTab === "additional information" && (
        <div className="text-center text-gray-500">
          Additional Information Content...
        </div>
      )}

      {activeTab === "reviews [5]" && (
        <div className="text-center text-gray-500">Reviews Content...</div>
      )}
    </div>
  );
}
