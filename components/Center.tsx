import { cn } from "@/lib/utils";
import React from "react";

const Center = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cn("w-full flex flex-col justify-center items-center")}
    >
      {children}
    </div>
  );
};

export default Center;
