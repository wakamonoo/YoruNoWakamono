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
        <div className="flex text-4xl md:text-5xl gap-2 bg-panel p-4 px-6 rounded-full">
          <NavLinks />
        </div>
      </div>
    );
  }
  return (
    <div className="flex left-1/2 transform -translate-x-1/2 p-4 fixed z-50">
      {expanded ? (
        <div className="flex text-4xl md:text-5xl gap-2 bg-panel p-4 px-6 rounded-full">
          <NavLinks />
        </div>
      ) : (
        <button onClick={() => setExpanded(true)} className="p-4 text-normal">
          <MdApps className="text-4xl md:text-5xl text-normal cursor-pointer hover:-translate-y-2 active:-translate-y-2 transition" />
        </button>
      )}
    </div>
  );
}

function NavLinks() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center group">
        <a href="#hero" className="relative z-10">
          <AiFillHome className="text-normal transition-all duration-200 hover:text-[var(--color-accent)] hover:-translate-y-2 active:-translate-y-2" />
        </a>
        <p className="text-xs text-header absolute opacity-0 transition-all duration-200 group-hover:opacity-100 mt-8 md:mt-10">
          Home
        </p>
      </div>

      <div className="relative flex flex-col items-center justify-center group">
        <a href="#about" className="relative z-10">
          <VscAccount className="text-normal transition-all duration-200 hover:text-[var(--color-accent)] hover:-translate-y-2 active:-translate-y-2" />
        </a>
        <p className="text-xs text-header absolute opacity-0 transition-all duration-200 group-hover:opacity-100 mt-8 md:mt-10">
          About
        </p>
      </div>

      <div className="relative flex flex-col items-center justify-center group">
        <a href="#skills" className="relative z-10">
          <RiRocket2Fill className="text-normal transition-all duration-200 hover:text-[var(--color-accent)] hover:-translate-y-2 active:-translate-y-2" />
        </a>
        <p className="text-xs text-header absolute opacity-0 transition-all duration-200 group-hover:opacity-100 mt-8 md:mt-10">
          Skills
        </p>
      </div>

      <div className="relative flex flex-col items-center justify-center group">
        <a href="#portfolio" className="relative z-10">
          <CgWebsite className="text-normal transition-all duration-200 hover:text-[var(--color-accent)] hover:-translate-y-2 active:-translate-y-2" />
        </a>
        <p className="text-xs text-header absolute opacity-0 transition-all duration-200 group-hover:opacity-100 mt-8 md:mt-10">
          Portfolio
        </p>
      </div>

      <div className="relative flex flex-col items-center justify-center group">
        <a href="#contact" className="relative z-10">
          <FaEnvelope className="text-normal transition-all duration-200 hover:text-[var(--color-accent)] hover:-translate-y-2 active:-translate-y-2" />
        </a>
        <p className="text-xs text-header absolute opacity-0 transition-all duration-200 group-hover:opacity-100 mt-8 md:mt-10">
          Contact
        </p>
      </div>
    </>
  );
}