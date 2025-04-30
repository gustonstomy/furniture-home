"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useFavoriteDrawer } from "@/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function FavoriteDrawer() {
  const { openSheetF, toggleSheetF } = useFavoriteDrawer();
  const [optimisticLiked, setOptimisticLiked] = useState<boolean>(true);

  const router = useRouter();

  const cartItems = [
    {
      id: 1,
      name: "Asgaard sofa",
      price: 250000,
      quantity: 1,
      image: "/images/Maskgroup.svg",
    },
  ];
  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const formatCurrency = (amount: number) => {
    return `Rs. ${amount.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
    })}`;
  };

  return (
    <Sheet open={openSheetF} onOpenChange={toggleSheetF}>
      <SheetTrigger asChild></SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription className="w-[60rem]"></SheetDescription>
          <div className="absolute right-0 top-0 h-[100dvh] w-full bg-white shadow-lg flex flex-col">
            <div className="flex items-center justify-between p-6 border-b">
              <span className="text-2xl font-bold">My Favorites</span>
              <button
                onClick={() => toggleSheetF(false)}
                className="relative  cursor-pointer"
              >
                <X className="absolute z-10 top-[24%] left-[24%] md:top-[24%] md:left-[25%] w-4 h-4 md:w-5 md:h-5 text-gray-700" />
                <Image
                  alt="img"
                  src={"/icons/akar-icons_heart.svg"}
                  width={60}
                  height={60}
                  className="insert-0 w-8 h-8 md:h-10 md:w-10"
                />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto w-full bg-white h-[60dvh] p-6 space-y-6">
              {cartItems.length === 0 ? (
                <span className="text-center text-gray-500">
                  Your cart is empty.
                </span>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 h-24 rounded-md py-4 w-full bg-white"
                  >
                    <Image
                      width={80}
                      height={80}
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20  object-contain rounded-md bg-[#f9f3e8]"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <span className="text-sm text-gray-500">
                        {item.quantity} x{" "}
                        <span className="text-[#b7903c]">
                          {formatCurrency(item.price)}
                        </span>
                      </span>
                    </div>
                    <button onClick={() => {}}>
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={optimisticLiked ? "red" : "gray"}
                        initial={{ scale: 1, opacity: 0.5 }}
                        animate={
                          optimisticLiked
                            ? { scale: [1, 1.3, 1], opacity: [0.5, 1, 1] }
                            : {}
                        }
                        transition={{ duration: 0.3 }}
                        className={cn("h-6 w-6 md:h-12 md:w-12")}
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </motion.svg>
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </SheetHeader>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
