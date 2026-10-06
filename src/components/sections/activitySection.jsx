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
      >
        <motion.h2
          variants={itemVariants}
          className="text-xl p-2 bg-brand rounded text-header mb-4 mt-8"
        >
          BATTLE RECORD
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-normal text-justify text-base  font-normal leading-tight mb-4"
        >
          Beyond the walls of hesitation lies the battlefield of creation. Every
          commit is a battle, every push a charge into the unknown. Here stands
          the record of every campaign fought in code.
        </motion.p>
        <motion.div variants={cardVariants}>
          <img
            src="https://ghchart.rshah.org/6f553f/wakamonoo"
            alt="git contributions"
            className="w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </>
  );
}
