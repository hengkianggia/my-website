import { cn } from "@/utils/utility";
import Link from "next/link";
import React from "react";

const LinkColor = ({
  teks,
  link,
  className,
}: {
  teks: string;
  link: string;
  className?: string;
}) => {
  return (
    <Link
      href={link}
      className={cn(
        "px-2 py-1 bg-slate-100 grid place-items-center text-my-green min-w-3",
        className
      )}
    >
      {teks}
    </Link>
  );
};

export default LinkColor;
