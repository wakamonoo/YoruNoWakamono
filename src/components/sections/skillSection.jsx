"use client";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiFirebase,
  SiKotlin,
  SiVercel,
  SiPhp,
  SiMysql,
  SiSocketdotio,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiRender,
  SiCloudinary,
  SiGithub,
  SiFramer,
  SiGit,
  SiTypescript,
  SiLeaflet,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { LoaderContext } from "@/context/loaderContext";
import FrontEnd from "../layout/skills/frontend";
import BackEnd from "../layout/skills/backend";
import DatabaseAndAuthentication from "../layout/skills/database&Auth";
import ToolsAndPlatforms from "../layout/skills/toolsAndPlatforms";
import LibrariesAndServices from "../layout/skills/libraries&Services";

export default function Skills() {
  const { loading } = useContext(LoaderContext);
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (loading) return;
    const current = containerRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(current);
    return () => {
      observer.disconnect();
    };
  }, [loading]);

  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 500, damping: 10 },
    },
  };
  return (
    <div ref={containerRef}>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h1
          variants={itemVariants}
          className="text-2xl mb-4 text-header"
        >
          ODM ARSENAL ────
        </motion.h1>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 justify-center mx-auto">
          <FrontEnd itemVariants={itemVariants} iconVariants={iconVariants} />
          <BackEnd itemVariants={itemVariants} iconVariants={iconVariants} />
          <DatabaseAndAuthentication
            itemVariants={itemVariants}
            iconVariants={iconVariants}
          />
          <ToolsAndPlatforms
            itemVariants={itemVariants}
            iconVariants={iconVariants}
          />
          <LibrariesAndServices
            itemVariants={itemVariants}
            iconVariants={iconVariants}
          />
        </div>
      </motion.div>
    </div>
  );
}
