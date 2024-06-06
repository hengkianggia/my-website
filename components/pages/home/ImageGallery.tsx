import Image, { StaticImageData } from "next/image";
import React from "react";
import me from "@/public/images/me.png";
import mee from "@/public/images/mee.jpeg";
import meee from "@/public/images/meee.jpg";
import team from "@/public/images/team.jpg";
import { cn } from "@/lib/utils";

const ImageGallery = () => {
  return (
    <div className="grid w-full grid-cols-3 gap-3 max-md:grid-cols-2">
      <Images image={team} rowOne />
      <Images image={me} rowTwo />
      <Images image={team} rowOne />
      <Images image={meee} rowTwo />
      <Images
        image={meee}
        rowTwo
        className="max-md:row-span-1 max-md:max-h-[140px]"
      />
      <Images image={team} rowOne />
    </div>
  );
};

export default ImageGallery;

export const Images = ({
  image,
  className,
  rowTwo,
  rowOne,
}: {
  image: StaticImageData;
  className?: string;
  rowTwo?: boolean;
  rowOne?: boolean;
}) => {
  return (
    <div
      className={cn(
        "rounded-lg cursor-pointer group hover:scale-105 transition-all duration-500 overflow-hidden",
        rowOne && "max-md:max-h-[140px]",
        rowTwo && "max-md:max-h-[275px] row-span-2",
        className
      )}
    >
      <Image
        src={image}
        alt=""
        className="object-cover w-full h-full transition-all duration-500 scale-125 rounded-lg origin-cente grayscale hover:scale-105 hover:grayscale-0"
        placeholder="blur"
      />
    </div>
  );
};
