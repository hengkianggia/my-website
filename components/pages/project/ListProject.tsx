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
    <Link href={`/project/${urlTitel}/detail`} className="no-underline">
      <div className="grid grid-cols-7 items-center gap-3 w-full cursor-pointer">
        <div className="col-span-2 overflow-hidden">
          <Image
            src={imageaa}
            width={200}
            alt="image"
            className="rounded-lg max-h-28 object-cover"
          />
        </div>

        <div className="col-span-5">
          <h1 className="text-3xl">{title}</h1>
          <h1 className="text-sm text-gray-500">{dateee}</h1>
          <p className="text-sm line-clamp-3">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ListProject;
