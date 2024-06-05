import { cn } from "@/lib/utils";
import React from "react";

const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element => {
  return (
    <div
      className={cn(
        "w-full max-w-[680px] flex flex-col justify-center items-center relative max-md:px-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
