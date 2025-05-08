import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { icons } from "./icons";
import CustomSheet from "./CustomSheet";
import { useAuthStore, useFavoriteDrawer, useSheetStore } from "@/store";
import Link from "next/link";
import { CartDrawer } from "@/components/cart/CartDrawer";
import clsx from "clsx";
import { Search } from "lucide-react";
import { IoClose } from "react-icons/io5";
import { FavoriteDrawer } from "./favorite/favoriteDrawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from "next/navigation";

export default function TopNav() {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const { closeSheet } = useSheetStore();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn());
  const { accessToken } = useAuthStore();
  const { toggleSheetF } = useFavoriteDrawer();
  const [searchValue, setSearchValue] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setOpenSearch(false);
    } else {
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [openSearch]);
  console.log("isLoggedIn :", isLoggedIn);
  console.log("accessToken :", accessToken);

  return (
    <main className="w-full sticky top-0 z-50 bg-[#FFFFFF]">
      {" "}
      <nav className="flex justify-between items-center py-[24px] lg:py-[14px]  2xl:py-[29px] bg-[#FFFFFF] px-[10px] lg:px-[54px] ">
        <div className="flex md:hidden cursor-pointer">
          <CustomSheet
            id="menu"
            showHeader={true}
            direction="left"
            className="w-[370px] bg-[#FFFFFF] shadow-lg"
            trigger={
              <div
                onClick={() => setOpenSearch(false)}
                className="flex items-center justify-center"
              >
                <icons.Menu className="text-black h-10 w-10" />
              </div>
            }
          >
            <div className="flex flex-col gap-[20px] pl-[2rem] mt-[2rem] bg-[#FFFFFF]">
              <Link
                href={"/"}
                onClick={() => closeSheet()}
                className="text-[#000000] font-semibold text-[16px] cursor-pointer"
              >
                Home
              </Link>
              <Link
                href={"/shop"}
                onClick={() => closeSheet()}
                className="text-[#000000] font-semibold text-[16px] cursor-pointer"
              >
                Shop
              </Link>
              <Link
                href={"/blog"}
                onClick={() => closeSheet()}
                className="text-[#000000] font-semibold text-[16px] cursor-pointer"
              >
                Blog
              </Link>
              <Link
                href={"/contact"}
                onClick={() => closeSheet()}
                className="text-[#000000] font-semibold text-[16px] cursor-pointer"
              >
                Contact
              </Link>
            </div>
            <div className="flex mt-8 px-8  justify-between items-center">
              <div
                onClick={() => {
                  setOpenSearch(!openSearch), closeSheet();
                }}
                className="relative cursor-pointer h-8 w-8"
              >
                <Image
                  alt="search"
                  src={"/icons/akar-icons_search.svg"}
                  fill
                  sizes="100%"
                  className="object-contain"
                />
              </div>

              <div
                onClick={() => {
                  closeSheet(), toggleSheetF(true);
                }}
                className="relative cursor-pointer h-8 w-8"
              >
                <Image
                  alt="favorite"
                  src={"/icons/akar-icons_heart.svg"}
                  fill
                  sizes="100%"
                  className="object-contain"
                />
              </div>
              <Link
                href={"/cart"}
                onClick={() => closeSheet()}
                className="relative cursor-pointer h-8 w-8"
              >
                <Image
                  alt="cart"
                  src={"/icons/ant-design_shopping-cart-outlined.svg"}
                  fill
                  sizes="100%"
                  className="object-contain"
                />
              </Link>
            </div>
          </CustomSheet>
          {/* <icons.Menu className="text-black h-8 w-8" /> */}
        </div>

        <Link
          href={"/"}
          className={` items-center ${openSearch ? "hidden md:flex" : "flex"}`}
        >
          <Image
            alt="house"
            src={"/images/houseL.svg"}
            width={70}
            height={70}
            className="h-10 w-10  md:h-16 md:w-16 "
          />
          <h1 className="text-[#000000] font-bold text-[28px] mr-5 ms:mr-0 md:text-[36px] cursor-pointer">
            Furniro
          </h1>
        </Link>

        <div className={` ${openSearch ? "hidden" : "flex md:hidden"}`}>
          {isLoggedIn ? (
            <Profile />
          ) : (
            <button
              onClick={() => router.push("/login")}
              className="cursor-pointer text-6 font-bold text-[#FFFFFF]  bg-[#B88E2F] hover:bg-[#B88E0F] py-2 px-4 rounded-2xl"
            >
              log in
            </button>
          )}
        </div>

        <div
          className={` md:gap-[16px] xl:gap-[75px] transition-all duration-500  ${
            openSearch
              ? "top-1/2 -translate-x-1/2 opacity-0  hidden md:flex"
              : "hidden md:flex"
          }`}
        >
          <Link
            href={"/"}
            className="text-[#000000] font-semibold text-[16px] cursor-pointer"
          >
            Home
          </Link>
          <Link
            href={"/shop"}
            className="text-[#000000] font-semibold text-[16px] cursor-pointer"
          >
            Shop
          </Link>
          <Link
            href={"/blog"}
            className="text-[#000000] font-semibold text-[16px] cursor-pointer"
          >
            Blog
          </Link>
          <Link
            href={"/contact"}
            className="text-[#000000] font-semibold text-[16px] cursor-pointer"
          >
            Contact
          </Link>
        </div>

        <div
          className={clsx(
            "relative z-50 ml-6  items-center rounded-full w-full border border-[#B5B5B5] pr-2 transition-all duration-500",
            openSearch && "mt-2 border-black400 bg-white top-1/2 flex",
            openSearch && !isLargeScreen && "animate-slide-from-right",
            openSearch &&
              isLargeScreen &&
              "lg:w-[500px] animate-slide-from-rightLg",
            !openSearch &&
              "mt-2 border-black400 bg-white top-1/2 hidden opacity-0 animate-slide-to-right" // You might need a corresponding "slide-to-right-lg" if you want different exit animations
          )}
        >
          <div className="flex w-full items-center rounded-full px-4 py-2 lg:h-[37px]">
            <Search className="h-5 w-5" />

            <input
              ref={searchInputRef}
              className={clsx(
                "lg:my-4 ml-2 w-full flex-1 outline-none lg:h-[35px]",
                openSearch ? "bg-white" : "bg-primarybg"
              )}
              placeholder="Search"
              // defaultValue={searchValue}
              value={searchValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearchValue(e.target.value);
              }}
            />
          </div>

          {openSearch && (
            <button
              onClick={() => {
                searchValue ? setSearchValue("") : setOpenSearch(false);
              }}
              className="text-gray-500 cursor-pointer"
            >
              <IoClose className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="hidden md:flex md:gap-[16px] xl:gap-[45px] items-center">
          <div
            onClick={() => setOpenSearch(!openSearch)}
            className={`relative cursor-pointer h-8 w-8 ${
              openSearch ? "hidden" : "flex"
            }`}
          >
            <Image
              alt="search"
              src={"/icons/akar-icons_search.svg"}
              fill
              sizes="100%"
              className="object-contain"
            />
          </div>
          <div
            onClick={() => toggleSheetF(true)}
            className="relative cursor-pointer h-8 w-8"
          >
            <Image
              alt="favorite"
              src={"/icons/akar-icons_heart.svg"}
              fill
              sizes="100%"
              className="object-contain"
            />
          </div>
          <Link href={"/cart"} className="relative cursor-pointer h-8 w-8">
            <Image
              alt="cart"
              src={"/icons/ant-design_shopping-cart-outlined.svg"}
              fill
              sizes="100%"
              className="object-contain"
            />
          </Link>
          {isLoggedIn ? (
            <Profile />
          ) : (
            <button
              onClick={() => router.push("/login")}
              className="cursor-pointer text-6 font-bold text-[#FFFFFF]  bg-[#B88E2F] hover:bg-[#B88E0F] py-2 px-4 rounded-2xl"
            >
              log in
            </button>
          )}
        </div>
      </nav>
      <div className="">
        <CartDrawer />
        <FavoriteDrawer />
      </div>
    </main>
  );
}

function Profile() {
  const [firstName, setFirstName] = useState("Guston");
  const [lastName, setLastName] = useState("Stomy");
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
  };
  return (
    <Popover>
      <PopoverTrigger>
        <div className="relative cursor-pointer h-8 w-8">
          <Image
            alt="person"
            src={"/icons/person.svg"}
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-4 bg-white rounded shadow-md outline-none">
        <p className="mb-2 text-black text-[20px] font-semibold">
          Edit Profile
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="mt-1 py-4 block w-full rounded-md border px-4 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="mt-1 py-4 block w-full rounded-md border px-4 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-[#B88E2F]  text-white font-semibold rounded-md py-3 px-4 "
          >
            Submit
          </button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
