"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Next.js Admin Dashboard",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    girUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "E-commerce Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    girUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Mobile"],
    girUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    girUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Project 5 description",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    girUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Game Development",
    description: "Project 6 description",
    image: "/images/projects/6.png",
    tag: ["All", "Game"],
    girUrl: "/",
    previewUrl: "/",
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
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-6 ">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 pb-10">
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
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12 ">
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
      </div>
    </div>
  );
}
