"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { useCartDrawer } from "@/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
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

export function CartDrawer() {
  const { openSheet, toggleSheet } = useCartDrawer();
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
    return ` Gh₵ ${amount.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
    })}`;
  };

  return (
    <Sheet open={openSheet} onOpenChange={toggleSheet}>
      <SheetTrigger asChild></SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription className="w-[60rem]"></SheetDescription>
          <div className="absolute right-0 top-0 h-[100dvh] w-full bg-white shadow-lg flex flex-col">
            <div className="flex items-center justify-between p-6 border-b">
              <span className="text-2xl font-bold">Shopping Cart</span>
              <button
                onClick={() => toggleSheet(false)}
                className="relative cursor-pointer"
              >
                <X className="absolute z-10 top-[27%] left-[20%] w-5 h-5 text-gray-700" />
                <Image
                  alt="img"
                  src={"/icons/closeCart.svg"}
                  width={60}
                  height={60}
                  className="insert-0 h-8 w-8"
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
                      <X className="w-5 h-5 text-gray-400 hover:text-gray-700" />
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between font-semibold">
                <span>Subtotal</span>
                <span className="text-[#b7903c]">
                  {formatCurrency(calculateSubtotal())}
                </span>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    router.push("/cart");
                    toggleSheet(false);
                  }}
                  className="flex-1 border-2 border-black py-2 rounded-md font-semibold hover:bg-black hover:text-white "
                >
                  Cart
                </button>
                <button
                  onClick={() => {
                    router.push("/checkout");
                    toggleSheet(false);
                  }}
                  className="flex-1 border-2 border-black py-2 rounded-md font-semibold hover:bg-black hover:text-white "
                >
                  Checkout
                </button>
              </div>

              <button className="w-full border-2 border-black py-2 rounded-md font-semibold hover:bg-black hover:text-white ">
                Comparison
              </button>
            </div>
          </div>
        </SheetHeader>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
