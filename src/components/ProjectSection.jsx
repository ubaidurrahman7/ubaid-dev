"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const projectsData = [
  {
    id: 1,
    title: "Flow Job",
    description:
      "A robust job application platform built with Next.js, Tailwind CSS, and TypeScript. Key features include server-side actions, pagination, search filters, metadata, and SEO optimization.",
    image: "/images/projects/Flowjob.png",
    tag: ["All", "Web"],
    girUrl: "https://github.com/ubaidurrahman7/nextjs-job-board",
    previewUrl: "https://flow-job.vercel.app/",
  },
  {
    id: 2,
    title: "Gemini Clone",
    description:
      "A full-featured clone of the Gemini platform developed using Next.js, showcasing modern web development practices.",
    image: "/images/projects/gemini.png",
    tag: ["All", "Web"],
    girUrl: "https://github.com/ubaidurrahman7/gemini-clone",
    previewUrl: "https://geminiclone1-react.netlify.app/",
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "A personal portfolio web application crafted with Next.js, Shadcn, and Framer Motion for seamless animations.",
    image: "/images/projects/n-p.png",
    tag: ["All", "Web"],
    girUrl: "https://github.com/ubaidurrahman7/myNextPortfolio",
    previewUrl: "https://ubaid-dev.vercel.app/",
  },
  {
    id: 4,
    title: "Portfolio",
    description:
      "A professional portfolio website built with Next.js and Tailwind CSS, highlighting key projects and skills.",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    girUrl: "https://github.com/ubaidurrahman7/ubaid-dev",
    previewUrl: "https://ubaiddev.vercel.app/",
  },
  {
    id: 5,
    title: "Admin Dashboard",
    description:
      "A comprehensive admin dashboard application developed using Next.js and Node.js, featuring authentication and dynamic charts.",
    image: "/images/projects/n-dashboard.png",
    tag: ["All", "Web"],
    girUrl: "https://github.com/ubaidurrahman7/nextdashboard",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Netflix Clone",
    description:
      "A Netflix clone built with the MERN stack (MongoDB, Express.js, React.js, Node.js), including JWT authentication and YouTube integration.",
    image: "/images/projects/n-clone.png",
    tag: ["All", "Web"],
    girUrl: "https://github.com/ubaidurrahman7/nextjsNetflix0.1",
    previewUrl: "https://nextjs-netflix0-1.vercel.app/",
  },
  {
    id: 7,
    title: "Next.js Blog Web App",
    description:
      "A blog web application developed with Next.js and Supabase, offering a seamless content management experience.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    girUrl: "https://github.com/ubaidurrahman7/next-blog-app",
    previewUrl: "https://nextjsblog-app.vercel.app/",
  },
  {
    id: 8,
    title: "Stay Healthy",
    description:
      "A web application for managing doctor appointments and health records. Built with React.js for the frontend and MongoDB for the database backend.",
    image: "/images/projects/do_app.png",
    tag: ["All", "Web"],
    girUrl: "https://github.com/ubaidurrahman7/doctor_appointment_app",
    previewUrl: "",
  },
];

export default function ProjectSection() {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <div>
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="text-center text-4xl font-bold text-white mt-4 mb-6 "
      >
        My Projects
      </motion.h2>
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="text-white flex flex-row justify-center items-center gap-2 py-6 pb-10"
      >
        <ProjectTag
          onClick={() => handleTagChange("All")}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Web")}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Mobile")}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="grid md:grid-cols-3 gap-8 md:gap-12 "
      >
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.girUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </motion.div>
    </div>
  );
}
