"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

const NavList = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "experience",
    link: "/experience",
  },
  {
    name: "project",
    link: "/project",
  },
  {
    name: "activity",
    link: "/activity",
  },
  {
    name: "contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const pathname = usePathname();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <ul
        className={cn(
          "w-full my-20 flex gap-4 items-center text-my-black dark:text-my-white "
        )}
      >
        {NavList.map((nav) => (
          <li key={nav.name}>
            <Link
              href={nav.link}
              className={cn("no-underline hover:", {
                "underline underline-offset-4": pathname === nav.link,
              })}
            >
              {nav.name}
            </Link>
          </li>
        ))}

        <div className="ml-auto">
          {theme === "light" ? (
            <div className="group">
              <MdOutlineNightlight
                onClick={toggleTheme}
                color="black"
                size={24}
                className="cursor-pointer group-hover:animate-bounce"
              />
            </div>
          ) : (
            <div className="group">
              <MdOutlineLightMode
                onClick={toggleTheme}
                color="white"
                size={24}
                className="cursor-pointer group-hover:animate-bounce"
              />
            </div>
          )}
        </div>
      </ul>
    </>
  );
};

export default Navbar;
