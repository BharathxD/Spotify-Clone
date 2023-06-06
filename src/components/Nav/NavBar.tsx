"use client";

import { FC, ReactNode, useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "../UI/Box";
import NavbarItem from "./NavbarItem";

interface SiteBar {
  children: ReactNode;
}

const Navbar: FC<SiteBar> = ({ children }) => {
  const pathName = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: pathName !== "/search",
        href: "/",
        icon: HiHome,
      },
      {
        label: "Search",
        active: pathName === "/search",
        href: "/search",
        icon: BiSearch,
      },
    ],
    [pathName]
  );

  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item, index) => (
              <NavbarItem key={index} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">Song Library</Box>
      </div>
    </div>
  );
};

export default Navbar;
