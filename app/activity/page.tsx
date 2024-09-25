import Title from "@/components/Title";
import Wrapper from "@/components/Wrapper";
import ListActivity from "@/components/pages/Activity/ListActivity";
import React from "react";
import activity from "@/lib/data/listActivity.json";

const Activity = () => {
  return (
    <Wrapper className="gap-8 max-md:px-0">
      <Title
        title="my activity"
        desc="Within a few years of my journey to become a developer. There are
          several impressive experiences that I have had, including those below"
      />

      <div className="flex flex-col w-full gap-5">
        {activity.map((item, index) => (
          <ListActivity
            key={index}
            date={item.date}
            desc={item.desc}
            title={item.title}
            link={item.title}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Activity;
