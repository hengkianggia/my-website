import { cn } from "@/lib/utils";
import React from "react";
type Props = {
  title: string;
  desc: string;
  className?: string;
};

const Title = ({ title, desc, className }: Props) => {
  return (
    <section className={cn("w-full", className)}>
      <h1 className="mb-10 text-xl">{title}</h1>
      <p>{desc}</p>
    </section>
  );
};

export default Title;
