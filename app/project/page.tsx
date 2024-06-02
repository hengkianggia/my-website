import ListProject from "@/components/pages/project/ListProject";
import React from "react";

const Project = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
      <section className="w-full">
        <h1 className="text-xl mb-10">my project</h1>
        <p>
          I&#39;m a frontend developer. Currently, I&#39;m still studying in my
          final semester at Brawijaya University. I really like the technology
          environment and have been studying this field for about 3 years. I
          really enjoyed it🎉 i&#39;ts very exciting.
        </p>
      </section>

      <ListProject />
      <ListProject />
      <ListProject />
      <ListProject />
    </div>
  );
};

export default Project;
