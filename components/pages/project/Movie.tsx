import React from "react";
import image from "../../../public/images/movie.png";
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
        <div className="relative grid w-full grid-cols-2 gap-4 overflow-hidden max-h-96">
          <Image
            src={image}
            alt="maksa"
            className="object-cover object-center w-full h-full rounded-md"
            placeholder="blur"
          />
          <Image
            src={image}
            alt="maksa"
            className="object-cover object-center w-full h-full rounded-md"
            placeholder="blur"
          />
        </div>
      </section>
    </div>
  );
};

export default Movie;
