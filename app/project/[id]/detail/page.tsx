import Wrapper from "@/components/Wrapper";
import Eventeer from "@/components/pages/project/Eventeer";
import Furnix from "@/components/pages/project/Furnix";
import Jobs from "@/components/pages/project/Jobs";
import Movie from "@/components/pages/project/Movie";
import Pandooin from "@/components/pages/project/Pandooin";
import React from "react";

const DetailProject = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  let content = <Movie />;
  if (id.includes("eventeer")) {
    content = <Eventeer />;
  } else if (id.includes("furnix")) {
    content = <Furnix />;
  } else if (id.includes("jobs")) {
    content = <Jobs />;
  } else if (id.includes("pandooin")) {
    content = <Pandooin />;
  }

  return <Wrapper className="items-start max-md:px-0">{content}</Wrapper>;
};

export default DetailProject;
