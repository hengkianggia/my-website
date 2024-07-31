"use client";
import { useParams, useRouter } from "next/navigation";
import React from "react";

import image from "../../../public/images/eventeer.webp";
import Article from "../../../public/images/Article.png";
import Podcast from "../../../public/images/Podcast.png";
import Video from "../../../public/images/Video.png";
import Files from "../../../public/images/Recent.png";
import Login from "../../../public/images/Login.png";
import Image from "next/image";
import HeaderDetail from "@/components/HeaderDetail";

const Eventeer = () => {
  const path = useParams<{ id: string }>();
  const router = useRouter();

  return (
    <div>
      <HeaderDetail date="Aug 2023" title="Eventeer" />

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
        <div>
          <ul className="space-y-5">
            <li className="relative">
              <h2 className="text-lg font-semibold">
                1. Making All Eventeer Pages Responsive
              </h2>
              <p>
                One of the main challenges in modern web development is ensuring
                that the site can be accessed comfortably on various devices,
                from desktops to smartphones. In this case, I took the following
                steps:
              </p>
              <ul className="relative ml-10 max-md:ml-4  mt-2 space-y-2 list-disc">
                <li>
                  Using a Responsive CSS Framework: I utilized a CSS framework
                  like Bootstrap that helps in creating responsive layouts more
                  easily.
                </li>
                <li>
                  Media Queries: I implemented media queries to adjust the
                  appearance of page elements based on the devices screen size.
                </li>
                <li>
                  Flexbox and Grid: By using Flexbox and CSS Grid techniques, I
                  ensured that the elements on the page were neatly arranged and
                  could adjust to changes in screen size.{" "}
                </li>
                <li>
                  Testing on Various Devices: To ensure that all pages were
                  truly responsive, I conducted tests on various devices and
                  screen resolutions, including mobile and tablet simulations.
                </li>
              </ul>
              <div className="w-full grid place-items-center mt-4">
                <Image
                  src={Podcast}
                  alt="maksa"
                  className="object-cover object-center w-9/12 max-md:w-full h-full rounded-md"
                  placeholder="blur"
                />
              </div>
              <div className="relative mt-4 flex justify-between w-full overflow-hidden max-h-96">
                <Image
                  src={Article}
                  alt="maksa"
                  className="object-cover object-top w-[68%] h-96 max-md:h-48 rounded-md"
                  placeholder="blur"
                />
                <Image
                  src={Video}
                  alt="maksa"
                  className="object-cover object-top w-[30%] h-96 max-md:h-48 rounded-md"
                  placeholder="blur"
                />
              </div>
            </li>
            <li className="relative">
              <h2 className="text-lg font-semibold">
                2. Creating a New Feature (My Files)
              </h2>
              <p>
                The `My Files` feature is an important addition that allows
                users to manage their files directly from the Eventeer platform.
                Here are the steps I took to implement this feature:
              </p>
              <ul className="relative ml-10 max-md:ml-4  mt-4 space-y-2 list-disc">
                <li>
                  User Interface (UI) : Implementing the predetermined UI design
                  into code.
                </li>
                <li>
                  Functional Testing: Ensuring that this feature runs smoothly
                  and according to the predetermined flow.
                </li>
              </ul>
              <div className="w-full mt-4 grid place-items-center">
                <Image
                  src={Files}
                  alt="maksa"
                  className="object-cover object-top w-9/12 max-md:w-full h-72 max-md:h-full rounded-md"
                  placeholder="blur"
                />
              </div>
            </li>
            <li className="relative">
              <h2 className="text-lg font-semibold">
                3. Recaptcha Implementation
              </h2>
              <p>
                Security is an important aspect in event management, especially
                in preventing spam and abuse. I implemented Google reCAPTCHA to
                improve security by:
              </p>
              <ul className="relative ml-10 max-md:ml-4  mt-4 space-y-2 list-disc">
                <li>
                  Front-end Integration: Adding a reCAPTCHA widget to important
                  forms such as registration, login, to ensure that users are
                  human.
                </li>
                <li>
                  User Experience Testing: Ensuring that the addition of
                  reCAPTCHA does not disrupt the user experience and remains
                  easy to use.
                </li>
              </ul>
              <div className="w-full mt-4 grid place-items-center">
                <Image
                  src={Login}
                  alt="maksa"
                  className="object-cover object-top w-9/12 max-md:w-full h-72 max-md:h-full rounded-md"
                  placeholder="blur"
                />
              </div>
            </li>
            <li className="relative">
              <h2 className="text-lg font-semibold">
                4. Pusher Notification Implementation
              </h2>
              <p>
                Real-time notifications are a feature that increases user
                interaction and engagement in the Eventeer platform. Pusher
                Notification implementation involves several key steps:
              </p>
              <ul className="relative ml-10 max-md:ml-4  mt-4 space-y-2 list-disc">
                <li>
                  Pusher Integration: Using Pusher as a service to send
                  real-time notifications. This includes creating notification
                  channels and events.
                </li>
                <li>
                  Front-end Development: Adding client-side support for
                  receiving and displaying notifications. This includes
                  developing UI components that display notifications in a
                  responsive and engaging manner.
                </li>
                <li>
                  Performance Testing: Ensuring notifications are sent and
                  received quickly without overloading the server or disrupting
                  application performance.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Eventeer;
