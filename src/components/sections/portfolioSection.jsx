import { motion } from "framer-motion";
import { useContext, useState } from "react";
import Nexus from "../layout/portfolio/nexus";
import AnceStory from "../layout/portfolio/ancestory";
import { LoaderContext } from "@/context/loaderContext";
import Report from "../layout/portfolio/report";

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
    >
      <motion.h1 variants={itemVariants} className="text-2xl mb-4 text-header">
        RECON MISSIONS ────
      </motion.h1>{" "}
      <motion.p
        variants={itemVariants}
        className="text-normal text-justify text-base  font-normal leading-tight mb-4"
      >
        Full-scale operations executed by the elite Survey Corps, these are
        high-impact missions demanding precise strategy, relentless execution,
        and adaptability in hostile and ever-shifting environments. Each
        deployment is a testament to survival, innovation, and pushing past the
        walls of convention.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <Nexus cardVariants={cardVariants} />
          <AnceStory cardVariants={cardVariants} />
        </div>
        <div>
          <Report statsInView={statsInView} />
        </div>
      </div>
    </motion.div>
  );
}
