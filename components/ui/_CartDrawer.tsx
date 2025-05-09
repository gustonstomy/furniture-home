"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { useCartDrawer } from "@/store";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CartDrawer() {
  const { openSheet, toggleSheet } = useCartDrawer();
  const router = useRouter();

  useEffect(() => {
    if (openSheet) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openSheet]);

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
    <div
      className={`fixed right-0 top-20 left-0 bottom-0 z-50 transition-all ${
        openSheet ? "translate-x-0  " : "translate-x-full"
      }`}
    >
      <div className="absolute right-0 top-0 h-[90dvh] w-full max-w-md bg-white shadow-lg flex flex-col">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          <button onClick={() => toggleSheet(false)} className="relative ">
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
            <p className="text-center text-gray-500">Your cart is empty.</p>
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
                  <p className="text-sm text-gray-500">
                    {item.quantity} x{" "}
                    <span className="text-[#b7903c]">
                      {formatCurrency(item.price)}
                    </span>
                  </p>
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
    </div>
  );
}
