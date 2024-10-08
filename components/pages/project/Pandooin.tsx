import HeaderDetail from "@/components/HeaderDetail";
import Image from "next/image";
import React from "react";
import image from "@/public/images/project/pandooin.png";
import tablet from "@/public/images/project/tablet-pandooin.png";
import mobile from "@/public/images/project/mobile-pandooin.png";

const Pandooin = () => {
  return (
    <div>
      <HeaderDetail date="2024-07" title="Pandooin" />
      <div className="relative w-full overflow-hidden rounded-lg max-h-96">
        <Image
          src={image}
          alt="maksa"
          className="object-cover object-center w-full h-full"
          placeholder="blur"
        />
      </div>

      <section className="w-full mt-6">
        <h1 className="text-2xl font-semibold">Introduction</h1>
        <p>
          <a href="https://pandooin.vercel.app" target="_blank">
            Pandooin: Elevating Your Travel Experience in Indonesia
          </a>{" "}
          is a website landing page for premium travel and tourism platform that
          offers unparalleled experiences for discerning travelers seeking to
          explore the diverse wonders of Indonesia. As a leading provider of
          high-end travel services, we are dedicated to curating exceptional
          journeys that cater to the unique preferences and aspirations of our
          clients.
        </p>
        <br />
        <p>here is a simple interface : </p>
        <br />

        <div className="w-full grid grid-cols-12 gap-3">
          <div className="w-full col-span-7">
            <Image
              src={tablet}
              alt="maksa"
              className="object-cover object-top max-md:w-full rounded-md"
              placeholder="blur"
            />
          </div>
          <div className="w-full col-span-5">
            <Image
              src={mobile}
              alt="maksa"
              className="object-cover object-top  max-md:w-full rounded-md"
              placeholder="blur"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pandooin;
