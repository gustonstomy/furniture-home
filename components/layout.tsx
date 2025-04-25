"use client";

import React, { ReactNode } from "react";
import TopNav from "./TopNav";
import { usePathname } from "next/navigation";

interface HomeProps {
  children: ReactNode;
}

const Layout: React.FC<HomeProps> = ({ children }) => {
  const pathname = usePathname();
  const noLayoutRoutes = ["/login"];

  // const isNoLayoutRoute = noLayoutRoutes.includes(pathname);

  // if (isNoLayoutRoute) {
  //   return <main className="bg-primarybg">{children}</main>;
  // }

  return (
    <section className="bg-[#FFFFFF] relative">
      <TopNav />
      <div>
        {/* <aside></aside> */}
        <section>
          <div className="bg-[#FFFFFF]">{children}</div>
        </section>
      </div>
    </section>
  );
};
export default Layout;
