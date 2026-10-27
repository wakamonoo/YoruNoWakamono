"use client";
import { useState, useEffect, useContext } from "react";
import { AiFillHome } from "react-icons/ai";
import { VscAccount, VscGraph } from "react-icons/vsc";
import { RiRocket2Fill } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { MdApps } from "react-icons/md";
import { motion } from "framer-motion";
import { LoaderContext } from "@/context/loaderContext";

export default function NavMenu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { loading } = useContext(LoaderContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setExpanded(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  if (!isScrolled) {
    return (
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={loading ? "hidden" : undefined}
        whileInView={loading ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2 }}
        className="flex left-1/2 transform -translate-x-1/2 p-4 fixed z-50"
      >
        <div className="flex gap-2 bg-panel shadow-2xl p-4 px-6 rounded-full">
          <NavLinks />
        </div>
      </motion.div>
    );
  }
  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate={loading ? "hidden" : undefined}
      whileInView={loading ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
      className="flex left-1/2 transform -translate-x-1/2 p-4 fixed z-50"
    >
      {expanded ? (
        <div className="flex gap-2 bg-panel shadow-2xl p-4 px-6 rounded-full">
          <NavLinks />
        </div>
      ) : (
        <button onClick={() => setExpanded(true)} className="p-4 text-normal">
          <MdApps className="text-2xl text-normal cursor-pointer transition-all duration-200 hover:text-(--color-accent) active:text-(--color-accent)" />
        </button>
      )}
    </motion.div>
  );
}

function NavLinks() {
  return (
    <>
      <a
        href="#hero"
        className="cursor-pointer relative flex flex-col items-center justify-center group"
      >
        <AiFillHome className="text-normal transition-all duration-200 group-hover:text-[var(--color-accent)] group-active:text-[var(--color-accent)] group-hover:-translate-y-2 group-active:-translate-y-2 text-2xl" />

        <p className="text-xs text-header absolute opacity-0 transition-all duration-200 group-hover:opacity-100 mt-8">
          Home
        </p>
      </a>

      <a
        href="#about"
        className="cursor-pointer relative flex flex-col items-center justify-center group"
      >
        <VscAccount className="text-normal transition-all duration-200 group-hover:text-[var(--color-accent)] group-active:text-[var(--color-accent)] group-hover:-translate-y-2 group-active:-translate-y-2 text-2xl" />

        <p className="text-xs text-header absolute opacity-0 transition-all duration-200 group-hover:opacity-100 mt-8">
          About
        </p>
      </a>

      <div className="cursor-pointer relative flex flex-col items-center justify-center group">
        <a href="#portfolio" className="relative z-10">
          <CgWebsite className="text-normal transition-all duration-200 group-hover:text-[var(--color-accent)] group-active:text-[var(--color-accent)] group-hover:-translate-y-2 group-active:-translate-y-2 text-2xl" />
        </a>
        <p className="text-xs text-header absolute opacity-0 transition-all duration-200 group-hover:opacity-100 mt-8">
          Portfolio
        </p>
      </div>

      <a
        href="#activity"
        className="cursor-pointer relative flex flex-col items-center justify-center group"
      >
        <VscGraph className="text-normal transition-all duration-200 group-hover:text-[var(--color-accent)] group-active:text-[var(--color-accent)] group-hover:-translate-y-2 group-active:-translate-y-2 text-2xl" />

        <p className="text-xs text-header absolute opacity-0 transition-all duration-200 group-hover:opacity-100 mt-8">
          Activity
        </p>
      </a>

      <a
        href="#skills"
        className="cursor-pointer relative flex flex-col items-center justify-center group"
      >
        <RiRocket2Fill className="text-normal transition-all duration-200 group-hover:text-[var(--color-accent)] group-active:text-[var(--color-accent)] group-hover:-translate-y-2 group-active:-translate-y-2 text-2xl" />

        <p className="text-xs text-header absolute opacity-0 transition-all duration-200 group-hover:opacity-100 mt-8">
          Skills
        </p>
      </a>

      <a
        href="#contact"
        className="cursor-pointer relative flex flex-col items-center justify-center group"
      >
        <FaEnvelope className="text-normal transition-all duration-200 group-hover:text-[var(--color-accent)] group-active:text-[var(--color-accent)] group-hover:-translate-y-2 group-active:-translate-y-2 text-2xl" />

        <p className="text-xs text-header absolute opacity-0 transition-all duration-200 group-hover:opacity-100 mt-8">
          Contact
        </p>
      </a>
    </>
  );
}
