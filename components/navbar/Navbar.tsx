import React from "react";
import NavLaptop from "./NavLaptop";

const NavList = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "experience",
    link: "/experience",
  },
  {
    name: "project",
    link: "/project",
  },
  {
    name: "activity",
    link: "/activity",
  },
  // {
  //   name: "contact",
  //   link: "/contact",
  // },
];

const Navbar = () => {
  return (
    <>
      <NavLaptop navList={NavList} />
    </>
  );
};

export default Navbar;
