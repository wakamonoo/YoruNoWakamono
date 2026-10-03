import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Nexus from "../layout/hightlight/nexus";
import AnceStory from "../layout/hightlight/ancestory";

export default function Highlight({ loading }) {
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
      { threshold: 0.6 },
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
          SECTOR SHOWCASE ────
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8">
          <Nexus inView={inView} />
          <AnceStory inView={inView} />
        </div>
      </motion.div>
    </div>
  );
}