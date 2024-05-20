// import React from "react";
// import img from "../assets/img1.png";
// import { useTransform, motion } from "framer-motion";

// const About = ({ scrollYProgress }) => {
//   const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
//   const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
//   return (
//     <motion.div
//       name="about"
//       style={{ scale, rotate }}
//       className="about relative  h-screen"
//     >
//       <h1 className="bg-gray-600  px-16 py-3 font-bold text-1xl text-red-800">
//         About
//       </h1>
//     </motion.div>
//   );
// };

// export default About;
import React from "react";

const About = () => {
  return <div className="flex h-screen justify-center items-center">About</div>;
};

export default About;
