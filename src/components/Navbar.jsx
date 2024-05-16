import React from "react";

const Navbar = () => {
  const nav = [
    { _id: 1, to: "/", name: "Home" },
    { _id: 2, to: "/about", name: "About" },
  ];
  return (
    <nav className="navbar">
      <ul>{nav && nav.map((nav) => <li key={nav._id}>{nav.name}</li>)}</ul>
    </nav>
  );
};

export default Navbar;
