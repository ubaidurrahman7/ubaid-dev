"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import { RiGithubFill, RiLinkedinFill, RiTwitterFill } from "react-icons/ri";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Project",
    path: "/projects",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-6 py-4">
        <div className="flex items-center">
          <Link href={"/"} className="">
            <Image src="/images/header-logo.png" width={75} height={28} />
          </Link>
        </div>
        <div className="flex flex-grow justify-center">
          <div className="socials flex gap-2">
            <Link
              target="_blank"
              href="https://github.com/ubaidurrahman7"
              className="hover:text-blue-600 w-12 h-12 transition-all duration-300 flex items-center justify-center"
            >
              <RiGithubFill className="w-10 h-10" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/ubaid-ur-rahman-ba16811b8/"
              className="hover:text-blue-600 w-12 h-12 transition-all duration-300 flex items-center justify-center"
            >
              <RiLinkedinFill className="w-10 h-10" />
            </Link>
          </div>
        </div>
        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-slate-200
                     hover:text-white hover:border-white text-slate-200"
          >
            {!navbarOpen ? (
              <Bars3Icon className="h-5 w-5" />
            ) : (
              <XMarkIcon className="h-5 w-5" />
            )}
          </button>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
}
