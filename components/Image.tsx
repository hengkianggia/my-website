import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";

const Images = ({
  className,
  image,
}: {
  className?: string;
  image: StaticImageData;
}) => {
  return (
    <>
      <Image src={image} alt="desc" fill className={cn("w-full", className)} />
    </>
  );
};

export default Images;
