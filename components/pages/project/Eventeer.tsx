"use client";
import { useParams, useRouter } from "next/navigation";
import React from "react";

import image from "../../../public/images/team.jpg";
import Image from "next/image";
import { IoIosArrowRoundBack } from "react-icons/io";

const Eventeer = () => {
  const path = useParams<{ id: string }>();
  const router = useRouter();
  return (
    <div>
      <div
        className="flex items-center gap-3 mb-4 text-sm text-gray-700 cursor-pointer dark:text-gray-400"
        onClick={() => router.back()}
      >
        <IoIosArrowRoundBack size={24} />
        <h2>Back to list</h2>
      </div>
      <div className="mb-10">
        <h1 className="text-5xl font-bold">Eventeer</h1>
        <p className="text-sm text-gray-700 dark:text-gray-400">
          hengkianggia / Aug 2023
        </p>
      </div>

      <div className="relative w-full overflow-hidden rounded-lg max-h-96">
        <Image
          src={image}
          alt="maksa"
          className="object-cover object-center w-full h-full"
          placeholder="blur"
        />
      </div>

      <section className="w-full mt-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          velit, mollitia ullam nulla est ipsa amet perspiciatis modi aperiam
          excepturi voluptas doloremque, rerum ea dolorem, suscipit fuga sint
          tempore aspernatur dolore perferendis porro maxime optio dolorum!
          Veritatis autem accusantium ab nam saepe temporibus qui explicabo quia
          tempora nulla at reprehenderit velit nesciunt vero quisquam, eos culpa
          quasi minus! Porro qui nemo saepe voluptatibus commodi, ab eos dolorem
          hic quia aut.
        </p>{" "}
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae,
          maxime officiis unde fugiat facilis, praesentium harum eveniet non
          suscipit atque hic similique illum nihil eos necessitatibus veritatis
          dolorem repudiandae. Expedita animi tempore quia placeat quo. Rerum
          reprehenderit ipsa a maxime quaerat animi, facilis, amet quo deleniti
          sed non?
        </p>{" "}
        <br />
        <ul className="ml-12 list-disc">
          <li>
            <a href="" target="_blank">
              NextJs
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              NextJs
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              NextJs
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              NextJs
            </a>
          </li>
        </ul>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          aliquam, minima mollitia quas non, sunt rem facilis laudantium quam
          velit culpa officia rerum delectus, vero deserunt. Placeat velit illum
          dolor quasi veritatis nostrum neque dolorum! Dignissimos tempore odit
          tenetur pariatur velit. Voluptatum nisi eaque et, quod iure, earum
          perspiciatis maxime similique vel natus officiis repellendus optio.
        </p>{" "}
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
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          commodi porro ipsum omnis, dignissimos ea quidem ad est ex accusantium
          praesentium recusandae! Eos facere, repellendus nemo vitae ipsa fugiat
          odit expedita modi! Nisi molestiae veniam, eaque minus ducimus
          quisquam ex voluptatibus repudiandae sapiente, ipsa voluptates.
          Consequatur natus non a qui. Dolores laborum unde delectus incidunt
          voluptas quos velit, commodi itaque deleniti? Impedit, deleniti nisi
          provident expedita, quaerat inventore itaque mollitia facilis
          cupiditate eius nulla debitis minima, eum dicta!
        </p>
      </section>
    </div>
  );
};

export default Eventeer;
