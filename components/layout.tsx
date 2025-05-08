"use client";

import React, { ReactNode } from "react";
import TopNav from "./TopNav";
import { usePathname } from "next/navigation";
import { useCartDrawer } from "@/store";
import BackToTop from "./back-to-top";

interface HomeProps {
  children: ReactNode;
}

const Layout: React.FC<HomeProps> = ({ children }) => {
  const pathname = usePathname();
  const noLayoutRoutes = ["/login"];
  const { openSheet, toggleSheet } = useCartDrawer();

  const isNoLayoutRoute = noLayoutRoutes.includes(pathname);

  if (isNoLayoutRoute) {
    return <main className="bg-primarybg">{children}</main>;
  }

  return (
    <section className="bg-[#FFFFFF] relative">
      {openSheet && <div className="absolute z-50 inset-0 bg-black/50" />}
      <TopNav />
      <BackToTop />
      <div>
        {/* <aside></aside> */}
        <section>
          <div className="bg-[#FFFFFF] ">{children}</div>
        </section>
      </div>
    </section>
  );
};
export default Layout;
