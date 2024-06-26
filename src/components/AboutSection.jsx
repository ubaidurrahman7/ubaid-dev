"use client";
import { useState, useEffect } from "react";
import TabButton from "./TabButton";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import SkillsSection from "./SkillsSection";
import ProjectSection from "./ProjectSection";

const TAB_DATA = [
  {
    id: "education",
    title: "Education",
    content: (
      <ul className="flex flex-col list-disc pl-2 gap-y-2">
        <li>HSSC Pre Engineering, Islamia Model College Timargara.</li>
        <li>
          Bachelor of Science in Computer Science, Abdul Wali Khan University
          Mardan.
        </li>
      </ul>
    ),
  },
  {
    id: "certifications",
    title: "Certifications",
    content: (
      <ul className="flex flex-col gap-y-2 list-disc pl-2">
        <li>Full-stack Developer Bootcamp, Udemy.</li>
        <li>IBM Front-End Developer Specialization, Coursera.</li>
      </ul>
    ),
  },
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("education");
  const [isAboutPage, setIsAboutPage] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsAboutPage(window.location.pathname === "/about");
    }
  }, []);

  const handleChangeTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Image Component */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <Image
            className="hidden md:flex w-[500px] h-[500px]"
            src="/images/aboutImage.jpg"
            alt="About Image"
            width={450}
            height={430}
          />
        </motion.div>

        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hi, I am Ubaid ur Rahman, a full stack developer specializing in
            creating dynamic and user-friendly web applications. My expertise
            includes JavaScript, React, Next.js, TypeScript, Node.js, Express,
            MongoDB, HTML, CSS, and Git. I am constantly seeking to expand my
            skills and stay updated with the latest technologies. I am
            enthusiastic about working with others to bring innovative ideas to
            life.
          </p>

          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-row mt-8"
          >
            {TAB_DATA.map((tab) => (
              <TabButton
                key={tab.id}
                active={activeTab === tab.id}
                selectTab={() => handleChangeTab(tab.id)}
              >
                {tab.title}
              </TabButton>
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-8"
          >
            {TAB_DATA.find((tab) => tab.id === activeTab).content}
          </motion.div>
        </motion.div>
      </div>

      <SkillsSection />

      {isAboutPage && <ProjectSection />}
    </section>
  );
}
