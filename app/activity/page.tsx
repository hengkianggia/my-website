import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import ListActivity from "@/components/pages/Activity/ListActivity";
import React from "react";

const Activity = () => {
  return (
    <Wrapper className="gap-8 max-md:px-0">
      <Title
        title="my activity"
        desc="Within a few years of my journey to become a developer. There are
          several impressive experiences that I have had, including those below"
      />

      <div className="flex flex-col w-full gap-5">
        <ListActivity
          date={new Date("2021-05-25")}
          desc="Within a few years of my journey to become a developer. There are
          several impressive experiences that I have had, including those below"
          title="Makmu kiper dengan gaya bebas masookk"
          link="4678264826"
        />
        <ListActivity
          date={new Date("2021-05-25")}
          desc="Within a few years of my journey to become a developer. There are
          several impressive experiences that I have had, including those below"
          title="Makmu kiper dengan gaya bebas masookk"
          link="4678264826"
        />
        <ListActivity
          date={new Date("2021-05-25")}
          desc="Within a few years of my journey to become a developer. There are
          several impressive experiences that I have had, including those below"
          title="Makmu kiper dengan gaya bebas masookk"
          link="4678264826"
        />
        <ListActivity
          date={new Date("2021-05-25")}
          desc="Within a few years of my journey to become a developer. There are
          several impressive experiences that I have had, including those below"
          title="Makmu kiper dengan gaya bebas masookk"
          link="4678264826"
        />
        <ListActivity
          date={new Date("2021-05-25")}
          desc="Within a few years of my journey to become a developer. There are
          several impressive experiences that I have had, including those below"
          title="Makmu kiper dengan gaya bebas masookk"
          link="4678264826"
        />
        <ListActivity
          date={new Date("2021-05-25")}
          desc="Within a few years of my journey to become a developer. There are
          several impressive experiences that I have had, including those below"
          title="Makmu kiper dengan gaya bebas masookk"
          link="4678264826"
        />
      </div>
    </Wrapper>
  );
};

export default Activity;
