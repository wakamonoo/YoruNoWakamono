"use client";
import { useContext } from "react";
import { motion } from "framer-motion";
import { LoaderContext } from "@/context/loaderContext";

export default function Activity() {
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

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={loading ? "hidden" : undefined}
        whileInView={loading ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2 }}
        id="activity"
        className="p-8 md:p-16 lg:px-32 xl:px-72"
      >
        <motion.div
          variants={itemVariants}
          className="flex gap-2 items-center w-full"
        >
          <h1 className="text-2xl text-header uppercase">Battle Record</h1>
          <div className="w-12 h-px bg-accent shrink-0" />
        </motion.div>
        <motion.p
          variants={itemVariants}
          className="mt-4 text-normal text-justify text-base  font-normal leading-tight"
        >
          Beyond the walls of hesitation lies the battlefield of creation. Every
          commit is a battle, every push a charge into the unknown. Here stands
          the record of every campaign fought in code.
        </motion.p>
        <motion.div variants={cardVariants} className="mt-4">
          <img
            src="https://ghchart.rshah.org/3b2f2f/wakamonoo"
            alt="git contributions"
            className="w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </>
  );
}
