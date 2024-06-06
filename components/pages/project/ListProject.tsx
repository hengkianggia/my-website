import Image from "next/image";
import React from "react";

import imageaa from "@/public/images/team.jpg";
import Link from "next/link";

const ListProject = ({ title, description, date, id }: any) => {
  const datee = new Date(date);
  const dateee = datee.toLocaleDateString("en-EN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const urlTitel = title.toLowerCase().split(" ").join("-");
  return (
    <Link
      href={`/project/${urlTitel}/detail`}
      className="no-underline hover:text-my-black dark:hover:text-my-white"
    >
      <div className="grid w-full gap-1 cursor-pointer grid-rows-7 ">
        <div className="row-span-5 overflow-hidden">
          <Image
            src={imageaa}
            width={900}
            alt="image"
            className="object-cover w-full h-56 rounded-sm"
            placeholder="blur"
          />
        </div>

        <div className="row-span-2 ">
          <h1 className="text-xl">{title}</h1>
          <h2 className="text-sm text-gray-500">{dateee}</h2>
          <p className="text-sm line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ListProject;
