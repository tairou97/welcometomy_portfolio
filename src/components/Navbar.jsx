import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const nav = [
    { id: 1, href: "#home", name: "Home" },
    { id: 2, href: "#about", name: "About" },
    { id: 3, href: "#project", name: "Projects" },
  ];
  return (
    <nav className=" flex justify-center font-bold text-gray-300">
      <ul className=" z-10 fixed flex justify-center items-center  ">
        {nav.map((nav) => (
          <li className="m-5 text-2xl" key={nav.id}>
            <a href={nav.href}>{nav.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
