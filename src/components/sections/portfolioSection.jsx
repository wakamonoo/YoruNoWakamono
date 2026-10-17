import { motion } from "framer-motion";
import { useContext, useState } from "react";
import Nexus from "../layout/portfolio/nexus";
import AnceStory from "../layout/portfolio/ancestory";
import { LoaderContext } from "@/context/loaderContext";
import Report from "../layout/portfolio/report";
import IgniteSoles from "../layout/portfolio/ignitesoles";

export default function Portfolio() {
  const { loading } = useContext(LoaderContext);
  const [statsInView, setStatsInView] = useState(false);

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={loading ? "hidden" : undefined}
      whileInView={loading ? undefined : "visible"}
      onAnimationComplete={() => setStatsInView(true)}
      viewport={{ once: true, amount: 0.2 }}
      id="portfolio"
     className="p-8 md:p-16 lg:px-32 xl:px-72"
    >
      <motion.div
        variants={itemVariants}
        className="flex gap-2 items-center w-full"
      >
        <h1 className="text-2xl text-header uppercase">Flagship Mission</h1>
        <div className="w-12 h-px bg-accent shrink-0" />
      </motion.div>
      <motion.p
        variants={itemVariants}
        className="text-normal text-justify text-base  font-normal leading-tight mt-4"
      >
        Defining initiatives forged beyond the walls, these projects embody bold
        ideas, deliberate strategy, and relentless execution. Each stands as a
        testament to innovation, adaptability, and this digital scout's pursuit
        of uncharted possibilities.
      </motion.p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <Nexus cardVariants={cardVariants} />
        </div>
        <div>
          <Report statsInView={statsInView} />
        </div>
      </div>

      <motion.div
        variants={itemVariants}
        className="flex gap-2 items-center w-full mt-16"
      >
        <h1 className="text-2xl text-header uppercase">Field Assignments</h1>
        <div className="w-12 h-px bg-accent shrink-0" />
      </motion.div>
      <motion.p
        variants={itemVariants}
        className="text-normal text-justify text-base  font-normal leading-tight mt-4"
      >
        Venturing into uncharted territory, this digital scout undertakes varied
        assignments that demand ingenuity, adaptability, and the resolve to turn
        challenges into tangible results.
      </motion.p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <AnceStory cardVariants={cardVariants} />
        <IgniteSoles cardVariants={cardVariants} />
      </div>
    </motion.div>
  );
}
