import Link from "next/link";
import React from "react";

const ListActivity = ({
  date,
  title,
  desc,
  link,
}: {
  date: Date;
  title: string;
  desc: string;
  link: string;
}) => {
  const datee = new Date(date);
  const dateee = datee.toLocaleDateString("en-EN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      href={`activity/${link}/detail`}
      className="no-underline hover:text-my-black dark:hover:text-my-white"
    >
      <div className="w-full p-4 rounded-lg bg-opacity-5 bg-my-black dark:bg-my-white dark:bg-opacity-10">
        <div className="opacity-100">
          <h1 className="text-xl font-semibold line-clamp-2">{title}</h1>
          <h2 className="text-sm text-gray-700 dark:text-gray-400">{dateee}</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-400 line-clamp-3">
            {desc}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ListActivity;
