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
        className="text-normal transition-all duration-200 hover:text-[var(--color-accent)] hover:scale-110"
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        className="text-normal transition-all duration-200 hover:text-[var(--color-accent)] hover:scale-110"
      >
        <VscAccount />
      </a>
      <a
        href="#skills"
        className="text-normal transition-all duration-200 hover:text-[var(--color-accent)] hover:scale-110"
      >
        <RiRocket2Fill />
      </a>
      <a
        href="#portfolio"
        className="text-normal transition-all duration-200 hover:text-[var(--color-accent)] hover:scale-110"
      >
        <CgWebsite />
      </a>
      <a
        href="#contact"
        className="text-normal transition-all duration-200 hover:text-[var(--color-accent)] hover:scale-110"
      >
        <FaEnvelope />
      </a>
    </>
  );
}
