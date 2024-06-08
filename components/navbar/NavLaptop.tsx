"use client";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

type navProps = {
  navList: { name: string; link: string }[];
};

const NavLaptop = ({ navList }: navProps) => {
  const { theme, setTheme } = useTheme();

  const pathname = usePathname();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="sticky z-50 py-5 my-10 rounded-md w-[105%] px-4 bg-my-white dark:bg-my-black bg-opacity-40 dark:bg-opacity-40 backdrop-blur-sm top-10 max-md:top-5 max-md:my-5">
      <ul
        className={cn(
          "w-full flex gap-4 items-center text-my-black dark:text-my-white "
        )}
      >
        {navList.map((nav) => (
          <li key={nav.name}>
            <Link
              href={nav.link}
              className={cn(
                "no-underline hover:text-yellow-400 decoration-yellow-400 ",
                {
                  "underline underline-offset-8": pathname === nav.link,
                }
              )}
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
    </div>
  );
};

export default NavLaptop;
