import Image from "next/image";
import Cap from "@/assets/nexus/cap.png";
import IronMan from "@/assets/nexus/ironman.png";
import Thor from "@/assets/nexus/thor.png";
import Hulk from "@/assets/nexus/hulk.png";
import Widow from "@/assets/nexus/widow.png";
import HawkEye from "@/assets/nexus/hawkeye.png";
import Nexus from "@/assets/nexus_logo.png";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import TiktokEmbed from "@/components/layout/tiktokEmbed";

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

  const embed = {
    hidden: { opacity: 0, y: -100 },
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
          className="text-2xl md:text-3xl lg:text-4xl mb-4 text-header md:mb-8 lg:mb-12"
        >
          SECTOR SHOWCASE ────
        </motion.h1>
        <motion.div variants={embed}>
          <TiktokEmbed />
        </motion.div>
        <motion.p
          variants={itemVariants}
          className="text-normal text-justify text-base md:text-lg lg:text-xl font-normal leading-4.5 md:leading-6 mb-4 md:mb-8"
        >
          <strong>Nexus</strong> is a full-stack reconnaissance platform built
          with the MERN stack, Next.js, and modern web technologies, forged
          beyond the walls as a digital intelligence hub for Marvel enthusiasts.
          It allows cadets to <strong>track viewing progression</strong> across
          the cinematic timeline through release or chronological order, with{" "}
          <strong>real-time communication</strong> powered by Socket.io for
          instant coordination between users.
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="text-normal text-justify text-base md:text-lg lg:text-xl font-normal leading-4.5 md:leading-6"
        >
          A <strong>ranking system</strong> determines the most favored titles
          through collective judgment, while users can{" "}
          <strong>share posts</strong> (text, images, videos) and engage via
          reactions, comments, and saves.{" "}
          <strong>Real-time notifications</strong> relay all activity instantly.
          Data is handled through <strong>REST APIs</strong>, with deployment on{" "}
          <strong>Render</strong> for the server and <strong>Vercel</strong> for
          the client, ensuring stable operation across all fronts. Nexus is one{" "}
          <a
            href="https://nexus-wakamonoo.vercel.app"
            className="font-bold text-[var(--color-nexus)]"
          >
            click
          </a>{" "}
          away from you so kindly check it out.
        </motion.p>
      </motion.div>
    </div>
  );
}
