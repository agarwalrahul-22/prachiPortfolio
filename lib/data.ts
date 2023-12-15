import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import gc from "@/public/gc.jpg"
import ingen from "@/public/ingen.jpg"
import confu from "@/public/confu.jpg"
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer",
    location: "DROP Tech",
    description:
      "I worked as a front-end developer for 3 months on a Drone Delivery Web application. I also upskilled to React, redux developer here.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2021 - Aug 2021",
  },
  {
    title: "Software Development Intern",
    location: "Electrogati",
    description:
      "Worked as a Full-Stack Developer for 2 months. Used technologies like PHP, CodeIgniter, JavaScript, and Bootstrap, to develop a Automobile Renting, Buying and Selling web application. I upskilled here to Full-Stack Developer.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - July 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Blockchain Innovation Pvt. Ltd.",
    description:
      "I worked as a freelancer in full-stack development for 6 months. My stack included React, Next.js, Javascript, Express, Node.js and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Dec 2022 - May 2023",
  },
] as const;

export const projectsData = [
  {
    title: "inGEN",
    description:
      "Web application to generate automated bills and payments requests are mailed to customer in specific time intervals chosen by the shopkeeper. Payment Gateway through Razorpay is also integrated",
    tags: ["React", "JavaScript", "Tailwind", "Express", "MongoDB","Node.js"],
    imageUrl: ingen,
  },
  {
    title: "General Championship",
    description:
      "Web application to showcase events and facilitate student registration for students of IIT Bhubaneswar. It has features like real-time leaderboard tracking with teams separated by branch",
    tags: ["React", "JavaScript", "Material UI", "Express"],
    imageUrl: gc,
  },
  {
    title: "Restaurant ConFusion",
    description:
      "Dynamic website of a restaurant showcasing restaurant details, including menus and contact information. It has features like comments sections for reviewing a each dish, feedback sections for restaurant improvements",
    tags: ["React", "JavaScript", "Bootstrap", "Redux"],
    imageUrl: confu,
  },
] as const;

export const skillsData = [
  "C++",
  "Data Structures",
  "Algorithms",
  "JavaScript",
  "HTML",
  "CSS",
  "React JS",
  "Redux",
  "Next.js",
  "MERN",
  "MongoDB",
  "Express",
  "MySQL",
  "PHP",
  "CodeIgniter",
  "React Native",
  "Material UI",
  "GitHub",
  "Bootstrap",
  "Adobe XD",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Operating System",
  "OOPs",
  "DBMS",
] as const;
