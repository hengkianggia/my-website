import Image from "next/image";
import React from "react";

import eventeer from "@/public/images/project/eventeer.webp";
import movie from "@/public/images/project/movie.png";
import jobs from "@/public/images/project/jobs.jpeg";
import pandooin from "@/public/images/project/pandooin.png";
import furnix from "@/public/images/project/furnix.png";
import Link from "next/link";

const ListProject = ({ title, description, date, id }: any) => {
  const datee = new Date(date);
  const dateee = datee.toLocaleDateString("en-EN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const urlTitle = title.toLowerCase().split(" ").join("-");

  let srcImage = title.toLowerCase().includes("eventeer")
    ? eventeer
    : title.toLowerCase().includes("jobs")
    ? jobs
    : title.toLowerCase().includes("pandooin")
    ? pandooin
    : title.toLowerCase().includes("furnix")
    ? furnix
    : movie;

  return (
    <Link
      href={`/project/${urlTitle}/detail`}
      className="no-underline hover:text-my-black dark:hover:text-my-white"
    >
      <div className="grid w-full gap-1 cursor-pointer grid-rows-7 ">
        <div className="row-span-5 overflow-hidden">
          <Image
            src={srcImage}
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
