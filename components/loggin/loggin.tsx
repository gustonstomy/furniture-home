"use client";

import { useState } from "react";

export default function LoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState<string>();

  const handleTab = (txt: string) => {
    setIsLoggedIn(txt);
  };
  return (
    <div className="flex w-full h-[100dvh] items-center justify-center ">
      <div className="bg-[#B88E2F]  flex flex-col rounded-2xl">
        {isLoggedIn === "login" ? (
          <form className="flex flex-col gap-6 p-4 w-[20rem]">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <input
              type="email"
              placeholder="Email"
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 border border-gray-300 rounded"
            />
            <button className="bg-[#fff] text-black p-2 rounded">Login</button>
            <p className="text-center">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => handleTab("register")}
                className="text-blue-500"
              >
                register
              </button>
            </p>
          </form>
        ) : (
          <form className="flex flex-col gap-6 p-4 w-[20rem]">
            <h1 className="text-2xl font-bold text-center">Register</h1>
            <input
              type="email"
              placeholder="Email"
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="name"
              placeholder="Full Name"
              className="p-2 border border-gray-300 rounded"
            />
            <button className="bg-[#fff] text-black p-2 rounded">
              Register
            </button>
            <p className="text-center">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => handleTab("login")}
                className="text-blue-500"
              >
                Log in
              </button>
            </p>
          </form>
        )}
        <div className="flex items-center justify-center px-4 py-2">
          <div className="w-full border-t border-gray-300"></div>
          <span className="mx-2 text-gray-500">or</span>
          <div className="w-full border-t border-gray-300"></div>
        </div>
      </div>
    </div>
  );
}
