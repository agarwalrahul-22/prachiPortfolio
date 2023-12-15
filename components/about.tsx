"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am working as Software Engineer 2 at{" "}
        <span className="font-medium"> Microsoft</span> enrolled in a B.Tech dual
        degree course. I am a Full-Stack Developer and having 1-2 years of
        experience working with
        <span className="font-medium">
          HTML, CSS, JavaScript, React JS, Redux, Next.js, MERN,
        </span>{" "}
        . I have good experience using version control systems(Git, Git Bash),
        Postman. I have sound knowledge in{" "}
        <span className="font-medium">
          Data Structures and Algorithms using C++ Programming Language
        </span>{" "}
        . I am currently looking for Job opportunities for year 2024 that
        resemble my skills domain. I am interested in domains like Web
        Development, Software Development, Software Engineering, and the
        Open-source field. I am a fast learner & enthusiastic, and Passionate
        about learning new things and technologies. I constantly challenge
        myself to learn new skills and to push myself to more new boundaries. I
        like to build stuff and solve crucial problems that can bring an impact
        on people and society. Over the years at my college campus, I have been
        involved with multiple activities, and I am in leadership roles for two
        student bodies. I also have good communication, listening skills and a
        zeal to learn.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        Badminton, video games, watching movies, listening to music. I also
        enjoy <span className="font-medium">learning new things</span>. I am
        currently learning about{" "}
        <span className="font-medium">Operating Systems and DBMS</span>. I'm
        also learning how to play the guitar.
      </p>
    </motion.section>
  );
}
