import Link from "next/link";
import { RiGithubFill, RiTwitterFill, RiLinkedinFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";

export default function EmailSection() {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div
        className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/70 to-transparent
       rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/4"
      ></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-12">Let`s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my invbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-grow gap-2">
          <Link
            href={""}
            className="hover:text-[#F13024] w-12 h-12 transition-all duration-300"
          >
            <RiGithubFill className="w-12 h-12" />
          </Link>
          <Link
            href={""}
            className="hover:text-[#F13024] w-12 h-12 transition-all duration-300"
          >
            <RiLinkedinFill className="w-12 h-12" />
          </Link>
          <Link
            href={""}
            className="hover:text-[#F13024] w-12 h-12 transition-all duration-300"
          >
            <RiTwitterFill className="w-12 h-12" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex-1 flex flex-col gap-6 w-full mx-auto">
          {/* group */}
          <div className="flex gap-x-6 w-full">
            <input
              type="text"
              placeholder="name"
              className="input"
              name="name"
            />
            <input
              type="text"
              placeholder="email"
              className="input"
              name="email"
            />
          </div>

          <textarea
            placeholder="message"
            className="textarea"
            name="message"
          ></textarea>
          <button
            className="btn rounded-full border border-white/50 max-w-[170px]
            px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
          >
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
              Let`s talk
            </span>
            <BsArrowRight
              className="-translate-y-[120%] opacity-0 group-hover:flex
              group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300
              absolute text-[22px]"
            />
          </button>
        </form>
      </div>
    </section>
  );
}
