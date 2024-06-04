import React from "react";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center my-24 border-t border-gray-700 dark:border-gray-400 pt-14 gap-14">
      <div className="w-full flex justify-center gap-7 text-gray-700 dark:text-gray-400">
        <a href="https://github.com/hengkianggia" target="_blank">
          <BsGithub
            size={24}
            className="cursor-pointer hover:-translate-y-2 transition-all"
          />
        </a>
        <a href="mailto:pengkyj00@gmail.com" target="_blank">
          <MdEmail
            size={24}
            className="cursor-pointer hover:-translate-y-2 transition-all"
          />
        </a>
        <a
          href="https://wa.me/+6285161919533?text=hii i want to talk with you"
          target="_blank"
        >
          <BsWhatsapp
            size={24}
            className="cursor-pointer hover:-translate-y-2 transition-all"
          />
        </a>
        <a href="https://www.linkedin.com/in/hengkianggia/" target="_blank">
          <BsLinkedin
            size={24}
            className="cursor-pointer hover:-translate-y-2 transition-all"
          />
        </a>
      </div>

      <div>
        <p className="text-xs text-gray-700 dark:text-gray-400">
          © 2024 Hengki Anggia made with love❤️.
        </p>
      </div>
    </div>
  );
};

export default Footer;
