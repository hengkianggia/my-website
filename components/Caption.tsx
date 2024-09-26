import clsx from "clsx";
import React from "react";

export const Caption = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={clsx(
        "mt-2 border-l-2 border-rose-200/5 pl-3 text-sm",
        "bg-gradient-to-br from-rose-200 to-rose-200/30 bg-clip-text text-transparent"
      )}
    >
      {children}
    </div>
  );
};
