"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  let hideTimeOut: any;

  const toggleVisibility = () => {
    if (window.scrollY > 150) {
      setIsVisible(true);
      clearTimeout(hideTimeOut);
      hideTimeOut = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    } else {
      setIsVisible(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div>
      {isVisible && (
        <button
          onClick={handleClick}
          className="fixed bottom-10 right-7 z-[100] cursor-pointer rounded-full bg-primary200 p-3 bg-black text-white shadow-lg transition-opacity duration-300"
        >
          <ArrowUp className="text-white" />
        </button>
      )}
    </div>
  );
}
