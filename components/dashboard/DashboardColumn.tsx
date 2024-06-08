import { cn } from "@/lib/utils";
import React from "react";

const DashboardColumn = ({
  children,
  title,
  claasName,
}: {
  title: string;
  claasName?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("rounded-lg p-5 bg-gray-700", claasName)}>
      <h1 className="text-2xl font-semibold">{title}</h1>
      {children}
    </div>
  );
};

export default DashboardColumn;
