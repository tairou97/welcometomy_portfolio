import React, { useState } from "react";
import styles from "./style.module.scss";
import Nav from "./nav/Navbar";

const Navmenu = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div onClick={() => setIsActive(!isActive)} className={styles.button}>
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
        ></div>
      </div>
      {isActive && <Nav />}
    </>
  );
};
export default Navmenu;
