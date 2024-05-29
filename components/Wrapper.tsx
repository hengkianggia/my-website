import { cn } from "@/utils/utility";
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
        "w-full max-w-[700px] flex flex-col justify-center items-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
