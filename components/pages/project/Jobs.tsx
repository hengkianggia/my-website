import HeaderDetail from "@/components/HeaderDetail";
import Image from "next/image";
import React from "react";
import image from "@/public/images/project/jobs.jpeg";
import admin from "@/public/images/project/jobs-admin.jpeg";
import detail from "@/public/images/project/jobs-detail.jpeg";
import post from "@/public/images/project/jobs-post.jpeg";

const Jobs = () => {
  return (
    <div>
      <HeaderDetail date="2024-04-23" title="PNGKY Jobs" />

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
          <a href="https://pngky-job.vercel.app" target="_blank">
            PNGKY Jobs
          </a>{" "}
          is a comprehensive online job platform that connects talented
          individuals with exciting career opportunities. Our mission is to
          empower job seekers and employers by providing a seamless and
          efficient job search and hiring experience.
        </p>

        <br />

        <p>Key Features:</p>

        <br />

        <div>
          <ul className="space-y-5">
            <li className="relative">
              <h2 className="text-lg font-semibold">1. Job Listings</h2>
              <p>
                Browse a wide range of job postings across various industries
                and locations, updated daily.
              </p>
            </li>
            <li className="relative">
              <h2 className="text-lg font-semibold">
                2. Detailed Job Listings
              </h2>
              <p>
                When job seekers browse the PNGKY Jobs platform, they can click
                on any job listing to access a dedicated page with comprehensive
                details about the position.
              </p>
              <div className="w-full mt-4 grid place-items-center">
                <Image
                  src={detail}
                  alt="maksa"
                  className="object-cover object-top w-9/12 max-md:w-full rounded-md"
                  placeholder="blur"
                />
              </div>
            </li>
            <li className="relative">
              <h2 className="text-lg font-semibold">3. Post a Job</h2>
              <p>
                Employers can easily post new job openings on the platform,
                reaching a wide pool of qualified candidates.
              </p>
              <div className="w-full mt-4 grid place-items-center">
                <Image
                  src={post}
                  alt="maksa"
                  className="object-cover object-top w-9/12 max-md:w-full rounded-md"
                  placeholder="blur"
                />
              </div>
            </li>
            <li className="relative">
              <h2 className="text-lg font-semibold">4. Search Jobs</h2>
              <p>
                Job seekers can utilize the powerful search functionality to
                find the perfect job opportunities based on their criteria.
              </p>
            </li>
            <li className="relative">
              <h2 className="text-lg font-semibold">5. Robust Job Filtering</h2>
              <p>
                Job seekers can easily filter job listings by type (e.g.,
                full-time, part-time, internship) or location to find the
                perfect opportunities that match their preferences.
              </p>
            </li>
            <li className="relative">
              <h2 className="text-lg font-semibold">
                6. Employer Job Posting and Approval
              </h2>
              <p>
                Employers can seamlessly post new job openings on the PNGKY Jobs
                platform, reaching a wide pool of qualified candidates. All job
                postings submitted by employers are reviewed and approved by the
                PNGKY Jobs admin team before being published live on the
                website. The admin page provides a centralized interface for the
                PNGKY Jobs team to efficiently manage, approve, or decline job
                postings based on established guidelines and criteria.
              </p>
              <div className="w-full mt-4 grid place-items-center">
                <Image
                  src={admin}
                  alt="maksa"
                  className="object-cover object-top w-9/12 max-md:w-full rounded-md"
                  placeholder="blur"
                />
              </div>
            </li>
          </ul>
        </div>

        <br />

        <p>
          I developed this platform using{" "}
          <a href="https://nextjs.org/" target="_blank">
            nextjs
          </a>{" "}
          and also several supporting tools such as{" "}
          <a href="https://tailwindcss.com/" target="_blank">
            tailwindcss
          </a>{" "}
          for styling,{" "}
          <a href="https://clerk.com/" target="_blank">
            clerk
          </a>{" "}
          for authentication,{" "}
          <a href="https://zod.dev/" target="_blank">
            zod
          </a>{" "}
          for input validation and{" "}
          <a href="https://www.prisma.io/" target="_blank">
            prisma
          </a>{" "}
          .
        </p>
      </section>
    </div>
  );
};

export default Jobs;
