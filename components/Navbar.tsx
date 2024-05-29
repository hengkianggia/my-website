import { cn } from "@/utils/utility";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <ul className={cn("w-full my-20 flex gap-4 items-center")}>
        <li>
          <Link href={"/"}>home</Link>
        </li>
        <li>
          <Link href={"/"}>skills</Link>
        </li>
        <li>
          <Link href={"/"}>experience</Link>
        </li>
        <li>
          <Link href={"/"}>activity</Link>
        </li>
        <li>
          <Link href={"/"}>contact</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
