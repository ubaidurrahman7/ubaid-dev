import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <section className="text-white">
      <div
        className=" md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 
      xl:gap-16 sm:py-16 xl:px-16"
      >
        <Image
          src="/images/aboutImage.jpg"
          alt="About Image"
          width={500}
          height={500}
        />
        <div className="">
          <h2>About Me</h2>
          <p>
            Hi, I`m Ubaid ur Rahman, a full stack developer and UI/UX designer
            with a passion for creating impactful web experiences. With
            expertise in front-end and back-end development, I specialize in
            building user-friendly applications that merge technical excellence
            with intuitive design. My commitment to continuous learning and
            innovation drives me to stay updated on industry trends and deliver
            cutting-edge solutions. Let`s collaborate and bring your ideas to
            life!
          </p>
        </div>
      </div>
    </section>
  );
}
