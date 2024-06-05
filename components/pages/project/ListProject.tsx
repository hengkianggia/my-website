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
      <div className="grid items-center w-full grid-cols-7 gap-3 cursor-pointer">
        <div className="col-span-2 overflow-hidden">
          <Image
            src={imageaa}
            width={200}
            alt="image"
            className="object-cover rounded-lg max-h-28"
            placeholder="blur"
          />
        </div>

        <div className="col-span-5">
          <h1 className="text-xl">{title}</h1>
          <h2 className="text-sm text-gray-500">{dateee}</h2>
          <p className="text-sm line-clamp-3">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ListProject;
