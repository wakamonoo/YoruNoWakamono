import { motion } from "framer-motion";
import { useContext } from "react";
import Nexus from "../layout/hightlight/nexus";
import AnceStory from "../layout/hightlight/ancestory";
import { LoaderContext } from "@/context/loaderContext";

export default function Highlight() {
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
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h1 variants={itemVariants} className="text-2xl mb-4 text-header">
        SECTOR SHOWCASE ────
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8">
        <Nexus cardVariants={cardVariants} />
        <AnceStory cardVariants={cardVariants} />
      </div>
    </motion.div>
  );
}
