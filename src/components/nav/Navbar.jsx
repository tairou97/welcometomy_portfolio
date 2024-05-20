import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

const NavLink = () => {
  const navbar = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "About", href: "/about" },
    { id: 3, title: "Work", href: "/work" },
    { id: 4, title: "Contact", href: "/contact" },
  ];
  return (
    <div className={styles.menu}>
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>

            {navbar.map((item, index) => (
              <Link data={{ ...item, index }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLink;
