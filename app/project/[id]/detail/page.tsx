"use client";
import Wrapper from "@/components/Wrapper";
import Eventeer from "@/components/pages/project/Eventeer";
import Movie from "@/components/pages/project/Movie";
import { usePathname } from "next/navigation";
import React from "react";

const DetailProject = () => {
  const pathname = usePathname();

  let content = <Movie />;
  if (pathname.includes("eventeer")) {
    content = <Eventeer />;
  }

  return <Wrapper className="items-start">{content}</Wrapper>;
};

export default DetailProject;
