import HeaderDetail from "@/components/HeaderDetail";
import Image from "next/image";
import React from "react";

const Pandooin = () => {
  return (
    <div>
      <HeaderDetail date="Aug 2023" title="Eventeer" />
      <div className="relative w-full overflow-hidden rounded-lg max-h-96"></div>
      <section className="w-full mt-6">
        <h1 className="text-2xl font-semibold">Introduction</h1>
        <p>
          <a href="https://eventeer.id/" target="_blank">
            Eventeer
          </a>{" "}
          is a community-based event management website that aims to help
          organize events more structured and efficient. In developing Eventeer,
          I played a major role in making improvements and adding new features
          that enrich the user experience. Here is a more detailed explanation
          of my contribution:
        </p>
        <br />
      </section>
    </div>
  );
};

export default Pandooin;
