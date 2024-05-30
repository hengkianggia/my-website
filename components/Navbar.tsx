"use client";

import { cn } from "@/utils/utility";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <ul
        className={cn(
          "w-full my-20 flex gap-4 items-center text-my-black dark:text-my-white"
        )}
      >
        <li>
          <Link href={"/"}>home</Link>
        </li>
        <li>
          <Link href={"/experience"}>experience</Link>
        </li>
        <li>
          <Link href={"/skills"}>skills</Link>
        </li>
        <li>
          <Link href={"/activity"}>activity</Link>
        </li>
        <li>
          <Link href={"/contact"}>contact</Link>
        </li>

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
