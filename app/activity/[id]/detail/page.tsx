import React from "react";
import image from "@/public/images/team.jpg";
import Image from "next/image";
import HeaderDetail from "@/components/HeaderDetail";

const DetailActivity = () => {
  return (
    <div>
      <HeaderDetail date="Aug 2023" title="Eventeer" />

      <div className="relative w-full overflow-hidden rounded-lg max-h-96">
        <Image
          src={image}
          alt="maksa"
          className="object-cover object-center w-full h-full"
          placeholder="blur"
        />
      </div>

      <section></section>
    </div>
  );
};

export default DetailActivity;
