"use client";

import React, { useEffect } from "react";
import { useSheetStore } from "@/store";
import clsx from "clsx";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

type SheetProps = {
  id: string;
  title?: string;
  trigger?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "bottom" | "left" | "right";
  showHeader?: boolean;
  isMobile?: boolean;
};

const CustomSheet = ({
  id,

  trigger,
  children,
  className,
  direction = "right",
  showHeader = true,
}: SheetProps) => {
  const { currentSheetId, openSheet, closeSheet } = useSheetStore();
  const isOpen = currentSheetId === id;

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeSheet();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeSheet]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <>
      {trigger && (
        <div onClick={() => openSheet(id)} className="cursor-pointer">
          {trigger}
        </div>
      )}

      {isOpen && (
        <>
          <div
            className={clsx(
              "fixed z-50 overflow-hidden bg-[#FFFFFF] shadow-xl transition-transform duration-300", // Added overflow-hidden
              {
                "left-0 top-0 h-[70vh] w-full": direction === "top",
                "bottom-0 left-0 h-[70vh] w-full": direction === "bottom",
                "left-0 top-0 h-[70vh] max-w-[420px]": direction === "left",
                "right-0 top-0 h-[100vh] w-[400px]": direction === "right",
              },
              className
            )}
          >
            {showHeader && (
              <div className="flex items-center justify-between  pt-3.5 pl-2.5 text-black mt-[1rem]">
                <div className="flex items-center ">
                  <Image
                    alt="house"
                    src={"/images/houseL.svg"}
                    width={70}
                    height={70}
                  />
                  <h1 className="text-[#000000] font-bold text-[36px] cursor-pointer">
                    Furniro
                  </h1>
                </div>
                <button type="submit" onClick={closeSheet} className="p-2 pr-4">
                  <IoClose size={34} />
                </button>
              </div>
            )}

            {/* Sheet Body */}
            <div className="h-full bg-[#FFFFFF]">{children}</div>
          </div>
        </>
      )}
    </>
  );
};

export default CustomSheet;
