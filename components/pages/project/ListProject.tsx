import Image from "next/image";
import React from "react";

import image from "@/public/images/team.jpg";

const ListProject = () => {
  return (
    <div className="grid grid-cols-7 items-center gap-3 w-full cursor-pointer">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={image}
          width={200}
          alt="image"
          className="rounded-lg max-h-28 object-cover"
        />
      </div>

      <div className="col-span-5">
        <h1 className="text-3xl">Eventeer</h1>
        <h1 className="text-sm text-gray-500">Aug 2023</h1>
        <p className="text-sm line-clamp-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod animi
          officiis maxime vero commodi non rerum alias, voluptas eum eligendi
          facere quam. Similique reprehenderit reiciendis, quasi omnis odit enim
          neque, optio consectetur velit dolores labore. Ratione harum obcaecati
          non odit.
        </p>
      </div>
    </div>
  );
};

export default ListProject;
