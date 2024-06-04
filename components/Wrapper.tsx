import { cn } from "@/lib/utils";
import React from "react";

const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full max-w-[680px] flex flex-col justify-center items-center relative",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
