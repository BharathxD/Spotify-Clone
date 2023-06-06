import mergeClasses from "@/utils/mergeClasses";
import Link from "next/link";
import { FC } from "react";
import { IconType } from "react-icons";

interface NavbarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const NavbarItem: FC<NavbarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <Link
      href={href}
      className={mergeClasses(
        "flex, flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1"
      )}
    >
      {label}
    </Link>
  );
};

export default NavbarItem;
