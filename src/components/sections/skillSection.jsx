"use client";
import { motion } from "framer-motion";
import { useContext } from "react";
import { LoaderContext } from "@/context/loaderContext";
import FrontEnd from "../layout/skills/frontend";
import BackEnd from "../layout/skills/backend";
import DatabaseAndAuthentication from "../layout/skills/database&Auth";
import ToolsAndPlatforms from "../layout/skills/toolsAndPlatforms";
import LibrariesAndServices from "../layout/skills/libraries&Services";

export default function Skills() {
  const { loading } = useContext(LoaderContext);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={loading ? "hidden" : undefined}
      whileInView={loading ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={itemVariants}
        className="flex gap-2 items-center w-full mb-4"
      >
        <h1 className="text-2xl text-header uppercase">ODM Arsenal</h1>
        <div className="w-12 h-px bg-accent shrink-0" />
      </motion.div>

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
  );
}
