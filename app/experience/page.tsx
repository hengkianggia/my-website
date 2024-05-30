import React from "react";

const Experience = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <section className="w-full">
        <h1 className="text-xl mb-10">my experience</h1>
        <p>
          Within a few years of my journey to become a developer. There are
          several impressive experiences that I have had, including those below
        </p>
      </section>

      <hr className="bg-my-black dark:bg-my-white" />

      <section className="w-full">
        <h1 className="text-xl">Digital Amoeba</h1>
        <h2 className="text-sm text-my-black dark:text-gray-400">
          Internship Frontend Developer | Aug - Dec 2023{" "}
        </h2>

        <div className="w-full mt-4">
          <p>
            Digital Amoeba is a company owned by Telkom Indonesia that focuses
            on human development and initiating new ideas. During my internship
            here I worked on developing the Eventeer application by optimizing
            functions in several parts
          </p>
        </div>
      </section>
    </div>
  );
};

export default Experience;
