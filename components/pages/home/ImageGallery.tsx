import Image from "next/image";
import React from "react";
import me from "../../../assets/images/me.png";
import team from "../../../assets/images/team.jpg";

const ImageGallery = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-3">
      <div className="rounded-lg">
        <Image
          src={team}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="rounded-lg row-span-2">
        <Image
          src={me}
          alt=""
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
      <div className="rounded-lg">
        <Image
          src={team}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="rounded-lg row-span-2">
        <Image
          src={me}
          alt=""
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
      <div className="rounded-lg row-span-2">
        <Image
          src={me}
          alt=""
          className="rounded-lg w-full h-full object-cover"
        />
      </div>{" "}
      <div className="rounded-lg bg-orange-400">
        <Image
          src={team}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
