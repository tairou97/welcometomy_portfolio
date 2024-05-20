import React from "react";
import { useTransform, motion } from "framer-motion";

const About = ({ scrollYProgress }) => {
  //   const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  //   const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);

  return (
    <motion.div
      //   style={{ scale, rotate }}
      className="about  h-screen"
    >
      <p className="text-center text-4xl">About</p>
    </motion.div>
  );
};

export default About;
