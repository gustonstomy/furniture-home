import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Asgaard sofa",
      price: 250000,
      quantity: 1,
      image: "/images/Asgaard-sofa.svg",
    },
  ]);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

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
    <section className="py-16 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Table */}
        <div className="lg:col-span-2">
          {/* Table Headers */}
          <div className=" flex justify-between md:grid md:grid-cols-5 items-center bg-[#F9F1E7] p-4 gap-0 rounded-md font-semibold text-gray-800 xl:mb-[55px] ">
            <div className="  col-span-2">Product</div>
            <div className="">Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>

          {/* Cart Items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between md:grid md:grid-cols-5 items-center border-b p-4"
            >
              <div className="w-14 h-14 mr-4 md:w-20 md:h-20 flex flex-col md:flex-row items-center md:gap-4 col-span-2 justify-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  priority
                  className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-md bg-[#F9F1E7]"
                />
                <span className="text-gray-700 text-[10px] md:text-[16px]">
                  {item.name}
                </span>
              </div>
              <div className="text-gray-700  text-[10px] md:text-[16px]">
                {formatCurrency(item.price)}
              </div>
              <div className="ml-1">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                  className="w-12 md:w-16 border rounded-md text-center p-1 md:p-2 mr-4"
                />
              </div>
              <div className="flex items-center md:gap-2">
                <span className="font-semibold text-[10px] md:text-[16px]">
                  {formatCurrency(item.price * item.quantity)}
                </span>
                <button onClick={() => handleRemoveItem(item.id)}>
                  <Trash2 className="w-5 h-5 text-[#b7903c]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Totals */}
        <div className="bg-[#F9F1E7] p-12 rounded-md  flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-16">Cart Totals</h2>
          <div className="flex justify-between mb-8">
            <span className="font-semibold mr-4">Subtotal</span>
            <span className="text-gray-500">
              {formatCurrency(calculateSubtotal())}
            </span>
          </div>
          <div className="flex justify-between mb-12">
            <span className="font-semibold mr-4">Total</span>
            <span className="text-[#b7903c] font-bold">
              {formatCurrency(calculateSubtotal())}
            </span>
          </div>
          <div className="flex w-full md:px-[16rem] lg:px-0 md:mt-6 lg:mt-0 xl:px-12">
            <button
              onClick={() => router.push("/checkout")}
              className="w-full border-2 border-black py-3 rounded-md font-semibold hover:bg-black hover:text-white transition"
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
