import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-44 h-screen fixed left-0 flex flex-col px-4 py-10 box-border gap-8 bg-gray-700">
      <h1>logo</h1>
      <ul className="flex flex-col gap-3">
        <li>
          <Link href={"/dashboard/experience"} className="no-underline">
            experience
          </Link>
        </li>
        <li>
          <Link href={"/dashboard/project"} className="no-underline">
            project
          </Link>
        </li>
        <li>
          <Link href={"/dashboard/activity"} className="no-underline">
            activity
          </Link>
        </li>
      </ul>
      <p className="mt-auto cursor-pointer">log out</p>
    </div>
  );
};

export default Sidebar;
