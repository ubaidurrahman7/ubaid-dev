import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const skills = [
  { id: 1, title: "JavaScript", image: "/images/Skills-images/javascript.png" },
  { id: 2, title: "React", image: "/images/Skills-images/reactjs.png" },
  { id: 3, title: "MongoDB", image: "/images/Skills-images/mongodb.png" },
  { id: 4, title: "Node js", image: "/images/Skills-images/nodejs.png" },
  { id: 5, title: "TypeScript", image: "/images/Skills-images/typescript.png" },
  { id: 6, title: "Next.js", image: "/images/Skills-images/nextjs.png" },
  {
    id: 7,
    title: "PostgresSQL",
    image: "/images/skills-images/postgressql.png",
  },
  {
    id: 8,
    title: "Tailwind CSS",
    image: "/images/skills-images/tailwindcss.png",
  },
];

export default function SkillsSection() {
  return (
    <motion.section
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="px-6 py-12 bg-[#121212]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5">
          <h5 className="text-[#9A9A9A] text-[16px]  mb-2">My Skills</h5>
          <h2 className="text-white text-4xl lg:text-5xl font-bold mb-4">
            Let’s Explore Popular <br />
            <span className="text-[#A357F7]">Skills & Experience</span>
          </h2>
          <p className="text-white text-16px mb-6">
            Expertise in both front-end and back-end technologies, ensuring
            end-to-end proficiency in software development.
          </p>
          <button className="px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
            Discover More
          </button>
        </div>

        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-[#1F1F1F] rounded-md h-36 p-4 hover:border-2 hover:border-[#66B20E] transition-all duration-300"
            >
              <Image
                src={skill.image}
                alt={skill.title}
                width={60}
                height={50}
                className="mx-auto mb-4 w-[60px] h-[50px]"
              />
              <h3 className="text-white text-18px mt-4 text-center">
                {skill.title}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
