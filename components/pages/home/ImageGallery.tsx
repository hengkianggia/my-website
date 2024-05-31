import Image, { StaticImageData } from "next/image";
import React from "react";
import me from "@/public/images/me.png";
import mee from "@/public/images/mee.jpeg";
import meee from "@/public/images/meee.jpg";
import team from "@/public/images/team.jpg";
import { cn } from "@/lib/utils";

const ImageGallery = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-3">
      <Images image={team} />
      <Images image={me} className="row-span-2" />
      <Images image={team} />
      <Images image={meee} className="row-span-2" />
      <Images image={meee} className="row-span-2" />
      <Images image={team} />
    </div>
  );
};

export default ImageGallery;

export const Images = ({
  image,
  className,
}: {
  image: StaticImageData;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-lg cursor-pointer group hover:scale-105 transition-all duration-500 overflow-hidden",
        className
      )}
    >
      <Image
        src={image}
        alt=""
        className="scale-125 rounded-lg grayscale transition-all duration-500 hover:scale-105 hover:grayscale-0"
        placeholder="blur"
      />
    </div>
  );
};
