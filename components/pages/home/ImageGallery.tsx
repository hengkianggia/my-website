import Image, { StaticImageData } from "next/image";
import React from "react";
import me from "@/public/images/me.webp";
import mee from "@/public/images/wisudaaaa.webp";
import meee from "@/public/images/meee.webp";
import team from "@/public/images/team.webp";
import teamku from "@/public/images/teamku.webp";
import group from "@/public/images/curug.webp";
import { cn } from "@/lib/utils";

const ImageGallery = () => {
  return (
    <div className="grid w-full grid-cols-3 gap-3 max-md:grid-cols-2">
      <Images image={mee} rowOne />
      <Images image={teamku} rowTwo />
      <Images image={group} rowOne />
      <Images image={me} rowTwo />
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
        rowOne && "max-md:h-[140px] h-44",
        rowTwo && "max-md:h-[292px] row-span-2",
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
