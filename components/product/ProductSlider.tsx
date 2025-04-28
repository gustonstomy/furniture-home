"use client";

import React from "react";
import {
  KeenSliderHooks,
  KeenSliderInstance,
  useKeenSlider,
} from "keen-slider/react";

import "keen-slider/keen-slider.min.css";

import Image from "next/image";

import Skeleton from "react-loading-skeleton";

function ThumbnailPlugin(
  mainRef: React.MutableRefObject<KeenSliderInstance<
    {},
    {},
    KeenSliderHooks
  > | null>
) {
  return (slider: {
    slides: any[];
    on: (event: string, callback: () => void) => void;
    track: { details: { rel: number | null; maxIdx: number } };
    moveToIdx: (idx: number) => void;
  }) => {
    function removeActive() {
      slider.slides.forEach(
        (slide: { classList: { remove: (className: string) => void } }) => {
          slide.classList.remove("active");
        }
      );
    }

    function addActive(idx: number) {
      if (idx >= 0 && idx < slider.slides.length) {
        slider.slides[idx].classList.add("active");
      }
    }

    function addClickEvents() {
      slider.slides.forEach((slide: HTMLElement, idx: number) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current || slider.track.details.rel === null) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main: any) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

function ProductSlider({
  images,
  productId,
  shareProduct,
}: {
  images: string[];
  productId: string;
  shareProduct?: any;
}) {
  const [sliderRef, instanceRef] = useKeenSlider({ initial: 0 });

  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 5,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <div className="flex flex-col md:flex-row-reverse items-start justify-start gap-2">
        {/* Main Slider */}
        {images.length === 0 ? (
          <Skeleton className="mb-6 h-[400px] w-[200px] rounded-md" />
        ) : (
          <div ref={sliderRef} className="keen-slider ">
            {images.map((image, index) => (
              <div
                key={index}
                className="keen-slider__slide h-[400px] w-[400px] xl:h-[500px] 2xl:h-[500px] 3xl:h-[600px]  rounded-lg bg-[#F9F1E7] flex items-center justify-center"
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="h-full w-full object-contain "
                />
              </div>
            ))}
          </div>
        )}

        {/* Thumbnail Slider */}
        {images.length === 0 ? (
          <Skeleton className="w-full rounded-md lg:h-[100px]" />
        ) : (
          <div
            ref={thumbnailRef}
            className="keen-slider thumbnail flex flex-row md:flex-col h-full md:!w-[100px]  items-center gap-2 md:gap-6"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="keen-slider__slide !min-h-[70px] !min-w-[60px] !max-w-full !transform-none rounded-lg bg-[#F9F1E7] lg:!h-[60px]"
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover "
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default ProductSlider;
