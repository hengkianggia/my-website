import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React from "react";

const Activity = () => {
  return (
    <Wrapper>
      <section className="w-full mb-8">
        <h1 className="mb-10 text-xl">my activity</h1>
        <p>
          Within a few years of my journey to become a developer. There are
          several impressive experiences that I have had, including those below
        </p>
      </section>

      <div className="flex flex-col w-full gap-5">
        <ListActivity
          date={new Date("2021-05-25")}
          desc="lorem3"
          title="babdakjdb"
          link="4678264826"
        />
        <ListActivity
          date={new Date("2021-05-25")}
          desc="lorem3"
          title="babdakjdb"
          link="4678264826"
        />
        <ListActivity
          date={new Date("2021-05-25")}
          desc="lorem3"
          title="babdakjdb"
          link="4678264826"
        />
        <ListActivity
          date={new Date("2021-05-25")}
          desc="lorem3"
          title="babdakjdb"
          link="4678264826"
        />
        <ListActivity
          date={new Date("2021-05-25")}
          desc="lorem3"
          title="babdakjdb"
          link="4678264826"
        />
        <ListActivity
          date={new Date("2021-05-25")}
          desc="lorem3"
          title="babdakjdb"
          link="4678264826"
        />
      </div>
    </Wrapper>
  );
};

export default Activity;

export const ListActivity = ({
  date,
  title,
  desc,
  link,
}: {
  date: Date;
  title: string;
  desc: string;
  link: string;
}) => {
  const datee = new Date(date);
  const dateee = datee.toLocaleDateString("en-EN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      href={`activity/${link}/detail`}
      className="no-underline hover:text-my-black dark:hover:text-my-white"
    >
      <div className="w-full p-4 rounded-lg bg-opacity-5 bg-my-black dark:bg-my-white dark:bg-opacity-10">
        <div className="opacity-100">
          <h1 className="text-xl font-semibold line-clamp-2">{title}</h1>
          <h2 className="text-sm text-gray-700 dark:text-gray-400">{dateee}</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-400 line-clamp-3">
            {desc}
          </p>
        </div>
      </div>
    </Link>
  );
};
