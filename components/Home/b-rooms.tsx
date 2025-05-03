"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { icons } from "../icons";
import { slidesData } from "@/store/data";

export default function Bedroom() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (sliderRef.current) {
      //@ts-ignore
      sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };
  return (
    <section className="flex flex-col md:flex-row md:h-[60%] lg:px-8 xl:px-0 gap-8 mt-[56px] max-w-[380px] sm:max-w-[680px] md:max-w-[700px] xl:max-w-[1200px] 2xl:max-w-[1500px] mx-auto">
      {/* First div - Text content */}
      <div className="px-4 md:px-0 md:w-1/3 flex justify-center flex-col gap-4 text-[#3A3A3A] font-bold text-[40px]">
        <p>50+ Beautiful rooms inspiration</p>
        <p className="flex text-[16px] text-[#616161] break-words">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <div className="xl:w-[40%]">
          <button className="cursor-pointer w-full border bg-[#B88E2F] hover:bg-[#B88E2F] text-[#FFFFFF] font-semibold text-[12px] sm:text-[16px] leading-1.5 rounded-[10px] py-[16px] lg:py-[22px] px-[10px] z-20">
            Show more
          </button>
        </div>
      </div>

      {/* Second div - Center image */}
      <div className="hidden sm:hidden lg:block w-full xl:w-1/3 relative">
        <div className="h-full w-full relative">
          <Image
            alt="bedroom"
            src={"/images/bedroomWall.webp"}
            fill
            sizes="100%"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <ImageSlider />
    </section>
  );
}

const ImageSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Function to handle next button click
  const handleNext = () => {
    if (sliderRef.current && !isScrolling) {
      const newIndex = (activeSlide + 1) % slidesData.length;
      goToSlide(newIndex);
    }
  };

  // Function to handle direct pagination click
  const handlePaginationClick = (index: number) => {
    if (!isScrolling) {
      goToSlide(index);
    }
  };

  // Unified function to handle slide transitions
  const goToSlide = (index: number) => {
    if (sliderRef.current) {
      setIsScrolling(true);
      setActiveSlide(index);
      const slideWidth = 350;
      const scrollAmount = index * slideWidth;

      sliderRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });

      setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current && !isScrolling) {
        const scrollLeft = sliderRef.current.scrollLeft;
        const slideWidth = 350; // Should match your actual slide width
        const newActiveSlide = Math.round(scrollLeft / slideWidth);

        if (
          newActiveSlide !== activeSlide &&
          newActiveSlide < slidesData.length
        ) {
          setActiveSlide(newActiveSlide);
        }
      }
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        slider.removeEventListener("scroll", handleScroll);
      };
    }
  }, [activeSlide, slidesData.length, isScrolling]);

  return (
    <div className="w-full xl:w-1/3 flex flex-col relative overflow-y-hidden no-scrollbar">
      <div
        ref={sliderRef}
        className="h-[80%] w-full overflow-x-auto overflow-y-hidden no-scrollbar snap-x snap-mandatory"
      >
        <div className="flex gap-2 w-max">
          {slidesData.map((slide, index) => (
            <div
              key={index}
              className="w-84 h-120 relative flex-shrink-0 snap-start"
            >
              <Image
                alt={`bedroom slide ${index + 1}`}
                src={slide.imageUrl}
                fill
                sizes="100%"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrow */}
      <div
        onClick={handleNext}
        className="absolute top-60 right-10 h-12 w-12 p-2 rounded-full border-2 flex items-center justify-center bg-white cursor-pointer hover:bg-gray-50 transition-colors z-10"
      >
        <icons.ArrowForward className="text-[#B88E2F]" />
      </div>

      {/* Pagination dots */}
      <div className="flex gap-4 pl-4 pt-[3rem]">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => handlePaginationClick(index)}
            className={`h-8 w-8 rounded-full border-2 flex items-center justify-center cursor-pointer transition-colors ${
              activeSlide === index ? "border-[#B88E2F]" : "border-transparent"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`h-4 w-4 rounded-full transition-colors ${
                activeSlide === index ? "bg-[#B88E2F]" : "bg-[#D8D8D8]"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
