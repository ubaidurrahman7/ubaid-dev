"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const projectsData = [
  {
    id: 1,
    title: "Flow job",
    description:
      "Flow job application created with Nextjs, tailwindcss, typscript and more. Features Nextjs server actions, pagination, Search filter, MetaData, SEO ",
    image: "/images/projects/Flowjob.png",
    tag: ["All", "Web"],
    girUrl: "https://github.com/ubaidurrahman7/nextjs-job-board",
    previewUrl: "https://flow-job.vercel.app/",
  },
  {
    id: 2,
    title: "Gemini Clone",
    description: "Gemini Clone using Nextjs",
    image: "/images/projects/gemini.png",
    tag: ["All", "Web"],
    girUrl: "https://github.com/ubaidurrahman7/gemini-clone",
    previewUrl: "https://geminiclone1-react.netlify.app/",
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "Portfolio web app created with Nextjs, shadcn, Framer Motion for Animation",
    image: "/images/projects/n-p.png",
    tag: ["All", "Web"],
    girUrl: "https://github.com/ubaidurrahman7/myNextPortfolio",
    previewUrl: "https://ubaid-dev.vercel.app/",
  },
  {
    id: 4,
    title: "Portfolio",
    description: "My Portfolio using Nextjs and tailwindcss",
    image: "/images/projects/portfolio.png",
    tag: ["All, Web"],
    girUrl: "https://github.com/ubaidurrahman7/ubaid-dev",
    previewUrl: "https://ubaiddev.vercel.app/",
  },
  {
    id: 5,
    title: "FULL stack Admin Dashboard",
    description:
      "Admin Dashboard web app created with nextjs, nodejs, auth, charts",
    image: "/images/projects/n-dashboard.png",
    tag: ["All", "Web"],
    girUrl: "https://github.com/ubaidurrahman7/nextdashboard",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Netflix Clone",
    description:
      "MERN stack projects. created netflix clone with reactjs, nodejs, express, jwt auth, youtube player",
    image: "/images/projects/n-clone.png",
    tag: ["All", "Web"],
    girUrl: "https://github.com/ubaidurrahman7/nextjsNetflix0.1",
    previewUrl: "https://nextjs-netflix0-1.vercel.app/",
  },
  {
    id: 7,
    title: "Next.js Blog Web App",
    description: "Blog web app created with nextjs, supabase,",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    girUrl: "/https://github.com/ubaidurrahman7/next-blog-app",
    previewUrl: "/https://nextjsblog-app.vercel.app/",
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
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
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
