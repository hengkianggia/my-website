import React from "react";
import image from "../../../public/images/movie.png";
import movie1 from "../../../public/images/movie1.png";
import movie2 from "../../../public/images/movie2.png";
import movie3 from "../../../public/images/movie3.png";
import Image from "next/image";
import HeaderDetail from "@/components/HeaderDetail";

const Movie = () => {
  return (
    <div>
      <HeaderDetail title="PNGKY Movie" date="Jan 2023" />

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
          <a href="https://pngky-movie.vercel.app/" target="_blank">
            PNGKY Movie
          </a>{" "}
          is a website to view information on lists of films and series
          available on the screen. In developing PNGKY Movie I work personally
          with technologies such as nextjs, tailwindcss and tmbd API.
        </p>

        <br />
        <div className="relative grid w-full grid-cols-2 gap-4 overflow-hidden">
          <Image
            src={movie2}
            alt="maksa"
            className="object-cover object-top w-full max-h-[450px] rounded-md"
            placeholder="blur"
          />
          <Image
            src={movie3}
            alt="maksa"
            className="object-cover object-top w-full max-h-[450px] rounded-md"
            placeholder="blur"
          />
          <Image
            src={movie1}
            alt="maksa"
            className="object-cover object-top w-full max-h-[450px] rounded-md"
            placeholder="blur"
          />
        </div>
      </section>
    </div>
  );
};

export default Movie;
