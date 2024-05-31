import LinkColor from "@/components/LinkColor";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "PNGKY | my experience🖐️",
  description: "My experience",
};

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
            <a href="https://digitalamoeba.id/" target="_blank">
              Digital Amoeba
            </a>{" "}
            is a company owned by{" "}
            <a href="https://www.telkom.co.id/sites" target="_blank">
              Telkom Indonesia{" "}
            </a>
            that focuses on human development and initiating new ideas. During
            my internship here I worked on developing the{" "}
            <a href="https://eventeer.id/" target="_blank">
              Eventeer{" "}
            </a>
            application by optimizing functions in several parts
          </p>

          <ul className="ml-6 mt-4 list-disc space-y-3">
            <li>
              I completed bug fixes in several features that users complained
              about in this application because they reduced the experience of
              using the application.
            </li>
            <li>
              I implemented the my-files feature which had previously been the
              target of implementing new features to improve the user
              experience.
            </li>
            <li>
              Completing suggestions for improvements from Eventeer officials
              for implementing Google Recaptcha to maintain the security of the
              application.
            </li>
            <li>
              Completed the need for push notifications which aims to make it
              easier for users to receive the latest notifications from
              application.
            </li>
            <li>
              completing the task of making all application pages responsive for
              all types of devices and answering complaints from users regarding
              this action.
            </li>
          </ul>
        </div>
      </section>

      <hr className="bg-my-black dark:bg-my-white" />

      <section className="w-full">
        <h1 className="text-xl">Digtive Global Media</h1>
        <h2 className="text-sm text-my-black dark:text-gray-400">
          Internship Web Developer | Feb - Jul 2023{" "}
        </h2>

        <div className="w-full mt-4">
          <p>
            <a href="https://www.digtive.co.id/" target="_blank">
              Digtive Global Media
            </a>{" "}
            is a software house that provides various services to international
            clients. During several months of my internship, I carried out
            website development tasks with various types of needs.
          </p>

          <ul className="ml-6 mt-4 list-disc space-y-3">
            <li>
              Build personal branding websites for clients by implementing
              responsive and informative design.
            </li>
            <li>
              provides a new option for Wearemania website design with a website
              design that is very easy to understand and responsive to all
              devices.
            </li>
            <li>
              Implementation of a new feature, namely product suggestions on one
              of the partner websites with a feature that gives users the right
              choice regarding products that match user complaints.
            </li>
            <li>participate in managing wearemania social media accounts.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Experience;
