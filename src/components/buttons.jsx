"use client";
import { useState, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { RiRocket2Fill } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { FaEnvelope } from "react-icons/fa";
import { MdApps } from "react-icons/md";

export default function NavMenu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  {
    /* ———————————————————————————————————— menu on 50 scroll ——— */
  }
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setExpanded(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  {
    /* ———————————————————————————————————— nav sec on !scroll ——— */
  }
  if (!isScrolled) {
    return (
      <div className="flex left-1/2 transform -translate-x-1/2 p-4 fixed z-50">
        <div className="flex text-4xl md:text-5xl gap-2 bg-panel px-8 py-4 rounded-full">
          <NavLinks />
        </div>
      </div>
    );
  }
  return (
    <div className="flex left-1/2 transform -translate-x-1/2 p-4 fixed z-50">
      {expanded ? (
        <div className="flex text-4xl md:text-5xl gap-2 bg-panel px-8 py-4 rounded-full">
          <NavLinks />
        </div>
      ) : (
        <button onClick={() => setExpanded(true)} className="p-4 text-normal">
          <MdApps className="text-4xl md:text-5xl text-normal cursor-pointer hover:scale-110 transition" />
        </button>
      )}
    </div>
  );
}

function NavLinks() {
  return (
    <>
      <a
        href="#hero"
        className="flex flex-col items-center justify-center group text-normal transition-all duration-200 hover:text-[var(--color-accent)] hover:scale-110"
      >
        <AiFillHome />
        <p className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-300">
          Home
        </p>
      </a>

      <a
        href="#about"
        className="flex flex-col items-center justify-center group text-normal transition-all duration-200 hover:text-[var(--color-accent)] hover:scale-110"
      >
        <VscAccount />
        <p className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-300">
          About
        </p>
      </a>
      <a
        href="#skills"
        className="flex flex-col items-center justify-center group text-normal transition-all duration-200 hover:text-[var(--color-accent)] hover:scale-110"
      >
        <RiRocket2Fill />
        <p className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-300">
          Skills
        </p>
      </a>
      <a
        href="#portfolio"
        className="flex flex-col items-center justify-center group text-normal transition-all duration-200 hover:text-[var(--color-accent)] hover:scale-110"
      >
        <CgWebsite />
        <p className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-300">
          Portfolio
        </p>
      </a>
      <a
        href="#contact"
        className="flex flex-col items-center justify-center group text-normal transition-all duration-200 hover:text-[var(--color-accent)] hover:scale-110"
      >
        <FaEnvelope />
        <p className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-300">
          Contact
        </p>
      </a>
    </>
  );
}
