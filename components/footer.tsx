import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="mb-[10rem] bg-white border-t border-gray-200 px-4 md:px-12 lg:px-24 pt-16 pb-8 text-gray-700 max-w-[380px] sm:max-w-[680px] md:max-w-[700px]  lg:max-w-[1500px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Company Info */}
        <div className="max-w-sm">
          <h2 className="text-2xl font-bold text-black mb-[42px]">Funiro.</h2>
          <address className="not-italic text-[16px] text-[#9F9F9F]">
            400 University Drive Suite 200 Coral <br /> Gables,
            <br />
            FL 33134 USA
          </address>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 flex-1">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-[55px]">
              Links
            </h3>
            <ul className="space-y-[46px]">
              <li>
                <Link
                  href={"/"}
                  className="hover:underline text-[16px] text-[#000000] font-semibold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/shop"}
                  className="hover:underline text-[16px] text-[#000000] font-semibold"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className="hover:underline text-[16px] text-[#000000] font-semibold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"/contact"}
                  className="hover:underline text-[16px] text-[#000000] font-semibold"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-[55px]">
              Help
            </h3>
            <ul className="space-y-[46px]">
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[16px] text-[#000000] font-semibold"
                >
                  Payment Options
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:underline text-[16px] text-[#000000] font-semibold"
                >
                  Returns
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline text-[16px] text-[#000000] font-semibold"
                >
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-[55px]">
              Newsletter
            </h3>
            <form className="flex items-center border-b border-black ">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 outline-none text-sm placeholder-gray-400"
              />
              <button
                type="submit"
                className="text-sm font-semibold border-b ml-12"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-16 border-t border-gray-200 pt-4 text-[16px] text-black">
        <p>2025 Funiro. All rights reserved</p>
      </div>
    </footer>
  );
}
