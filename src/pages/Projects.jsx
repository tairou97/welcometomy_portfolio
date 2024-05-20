import React from "react";
import { useTransform, motion } from "framer-motion";
import { useState } from "react";
import Project from "../components/projec/index";

const Projects = ({ scrollYProgress }) => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const projects = [
    {
      title: "Project 1",
      description: "This is a project description",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Project 2",
      description: "This is a project description",
      image: "https://via.placeholder.com/150",
    },
  ];

  //   const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  //   const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);
  return (
    <motion.main
      //   style={{ scale, rotate }}
      className=" project "
    >
      <div className=" body text-center text-4xl">
        {projects.map((project, index) => (
          <Projects
            key={index}
            index={project}
            title={project.title}
            setModal={setModal}
          />
        ))}
      </div>
    </motion.main>
  );
};

export default Projects;
