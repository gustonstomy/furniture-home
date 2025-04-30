"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

// interface BillingDetailsFormProps {
//   onSubmit: (formData: FormData) => void;
// }

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  country: string;
  streetAddress: string;
  paymentMethod: "directBankTransfer" | "cashOnDelivery";
  email: string;
  phone: string;
}

export default function BillingDetailsForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "Sri Lanka",
    streetAddress: "",
    paymentMethod: "directBankTransfer",
    email: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (
    value: "directBankTransfer" | "cashOnDelivery"
  ) => {
    setFormData((prev) => ({ ...prev, paymentMethod: value }));
  };

  const handleSubmit = () => {
    // onSubmit(formData);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      <div className="flex flex-col md:flex-row gap-8 md:gap-24">
        {/* Left side - Form fields */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-6">Billing details</h1>

          <div>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="w-full md:w-1/2">
                <label className="block mb-2 font-medium">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border rounded p-3 focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block mb-2 font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border rounded p-3 focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Company Name (Optional)
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full border rounded p-3 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-medium">Country / Region</label>
              <div className="relative">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full border rounded p-3 appearance-none focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <ChevronDown size={20} />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-medium">Street address</label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                className="w-full border rounded p-3 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded p-3 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Email address</label>
              <input
                type="text"
                name="emailAddress"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded p-3 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
          </div>
        </div>

        {/* Right side - Order summary */}
        <div className="w-full md:w-1/2">
          <div className="mt-12 mb-6">
            <div className="flex justify-between mb-2 text-lg">
              <span className="font-medium text-[24px] text-black">
                Product
              </span>
              <span className="font-medium text-[24px] text-black">
                Subtotal
              </span>
            </div>

            <div className="flex justify-between items-center py-4 border-t border-b md:border-none border-gray-200">
              <div className="flex items-center">
                <span className="text-[#9F9F9F]  text-[16px]">
                  Asgaard sofa
                </span>
                <span className="mx-2 text-black text-[16px]">x</span>
                <span className="text-black text-[16px]">1</span>
              </div>
              <span>Rs. 250,000.00</span>
            </div>

            <div className="flex justify-between py-4 border-b md:border-none border-gray-200">
              <span className="text-black text-[16px]">Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>

            <div className="flex justify-between py-4 border-b md:border-none border-gray-200">
              <span className="text-black text-[16px]">Total</span>
              <span className="font-bold text-xl text-[#B88E2F]">
                Rs. 250,000.00
              </span>
            </div>
          </div>

          {/* Payment methods */}
          <div className="mt-6">
            <div className="flex items-center mb-4">
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center cursor-pointer ${
                  formData.paymentMethod === "directBankTransfer"
                    ? "border-black"
                    : "border-gray-300"
                }`}
                onClick={() => handleRadioChange("directBankTransfer")}
              >
                {formData.paymentMethod === "directBankTransfer" && (
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                )}
              </div>
              <label
                className={`ml-2 cursor-pointer  font-medium text-[16px] ${
                  formData.paymentMethod === "directBankTransfer"
                    ? "text-black"
                    : "text-[#9F9F9F]"
                }`}
                onClick={() => handleRadioChange("directBankTransfer")}
              >
                Direct Bank Transfer
              </label>
            </div>

            {formData.paymentMethod === "directBankTransfer" && (
              <p className="text-[#9F9F9F] font-light text-[16px] mb-4 ">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            )}

            <div className="flex items-center mb-4">
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center cursor-pointer ${
                  formData.paymentMethod === "cashOnDelivery"
                    ? "border-black"
                    : "border-gray-300"
                }`}
                onClick={() => handleRadioChange("cashOnDelivery")}
              >
                {formData.paymentMethod === "cashOnDelivery" && (
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                )}
              </div>
              <label
                className={`ml-2 cursor-pointer ] font-medium text-[16px] ${
                  formData.paymentMethod === "cashOnDelivery"
                    ? "text-black"
                    : "text-[#9F9F9F]"
                }`}
                onClick={() => handleRadioChange("cashOnDelivery")}
              >
                Cash On Delivery
              </label>
            </div>
            {formData.paymentMethod === "cashOnDelivery" && (
              <p className="text-[#9F9F9F] font-light text-[16px] mb-4 ">
                On delivery you can pay with cash. Please make sure to have the
                exact amount as we cannot guarantee that our delivery person
                will be able to change.
              </p>
            )}

            <div className="mt-8">
              <p className="text-black font-light text-[16px] mb-4">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <a href="#" className="underline font-medium">
                  privacy policy
                </a>
                .
              </p>

              <div className="flex w-full mt-8 md:px-30 ">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-white border-2 border-black text-gray-800  px-8 py-3 rounded-lg font-medium hover:bg-black hover:text-white transition duration-300 ease-in-out"
                  type="button"
                  disabled={!formData.firstName || !formData.lastName}
                  // onClick={handleSubmit}
                >
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
