"use client";
import Link from "next/link";
import { RiGithubFill, RiTwitterFill, RiLinkedinFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { Send } from "@/app/api/send/actions";
import { useForm } from "react-hook-form";
import { CheckCheck, Loader2 } from "lucide-react";
import { useState } from "react";

export default function EmailSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted, isSubmitSuccessful },
    reset,
  } = useForm();

  const [showCheck, setShowCheck] = useState(false);

  const onSubmit = async (formData) => {
    try {
      await Send(formData);
      reset();
      setShowCheck(true);
      setTimeout(() => {
        setShowCheck(false);
      }, 1900); // Hides check icon after 1.5 seconds
    } catch (error) {
      console.log("Error sending message:", error);
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-40 w-40 xl:h-72 xl:w-72 z-0 blur-lg absolute top-2/3 md:top-2/3 -left-4 transform -translate-x-1/2 -translate-y-1/4"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-12">Let`s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-grow gap-2">
          <Link
            href={""}
            className="hover:text-blue-600 w-12 h-12 transition-all duration-300"
          >
            <RiGithubFill className="w-12 h-12" />
          </Link>
          <Link
            href={""}
            className="hover:text-blue-600 w-12 h-12 transition-all duration-300"
          >
            <RiLinkedinFill className="w-12 h-12" />
          </Link>
          <Link
            href={""}
            className="hover:text-blue-600 w-12 h-12 transition-all duration-300"
          >
            <RiTwitterFill className="w-12 h-12" />
          </Link>
        </div>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 flex flex-col gap-6 w-full mx-auto"
        >
          <div className="flex gap-x-6 w-full">
            <div className="flex flex-col gap-1">
              <input
                type="text"
                placeholder="name"
                className="input"
                name="name"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <p className="text-red-600 pl-2 text-sm">Required</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600 pl-2 text-sm">Required</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Subject"
              className="input"
              {...register("subject", { required: true })}
            />
            {errors.subject?.type === "required" && (
              <p className="text-red-600 pl-2 text-sm">Required</p>
            )}
          </div>

          <textarea
            placeholder="message"
            className="textarea"
            name="message"
            {...register("message", { required: true })}
          ></textarea>
          {errors.message?.type === "required" && (
            <p className="text-red-600 pl-2 text-sm mt-0">Required</p>
          )}
          <button
            type="submit"
            className={`btn rounded-full border border-white/50 max-w-[170px]
            px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-blue-600 group ${
              showCheck && "border-green-500"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting && <Loader2 className="animate-spin" />}
            {!isSubmitting && !showCheck && (
              <>
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Let`s talk
                </span>

                <BsArrowRight
                  className="-translate-y-[120%] opacity-0 group-hover:flex
                                    group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300
                                  absolute text-[22px]"
                />
              </>
            )}
            {showCheck && <CheckCheck className="text-green-500" />}
          </button>
        </form>
      </div>
    </section>
  );
}
