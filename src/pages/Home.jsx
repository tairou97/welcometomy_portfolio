import { useTransform, motion } from "framer-motion";
import React from "react";
import styles from "../pages/style.module.scss";
import Image from "../assets/img/tairou1.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

const Home = ({ scrollYProgress }) => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = 1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: true,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };
  //   const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  //   const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.div
      //   style={{ scale, rotate }}
      className={`    ${styles.main}`}
    >
      <img fill={true} src={Image} alt="Tairou Mouhamed" />
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          {" "}
          <p ref={firstText}> Tairou Mouhamed - </p>
          <p ref={secondText}> Tairou Mouhamed - </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
