"use client";
import Image from "next/image";
import wall from "../assets/aotWall.png";
import me from "../assets/wkmn.png";
import NavMenu from "@/components/buttons";
import Signage from "@/components/signage";
import Intro from "@/components/intro";
import Titan from "../assets/bertolo.png";
import { motion, stagger } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Hero({ loading }) {
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
      { threshold: 0.25 }
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

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <div ref={containerRef}>
      <motion.div
        initial="hidden"
        variants={containerVariant}
        animate={inView ? "visible" : "hidden"}
        className="pointer-events-none"
      >
        {/* ———————————————————————————————————— nav import ——— */}
        <motion.div variants={itemVariants} className="relative z-50 pointer-events-auto">
          <NavMenu />
        </motion.div>

        {/* ———————————————————————————————————— wall, titan, me-pic and info ——— */}
        <motion.div
          variants={itemVariants}
          className="absolute top-8 left-1/2 transform -translate-x-1/2 w-[35rem] sm:w-[40rem] h-[20rem] sm:h-[25rem] md:w-[45rem] md:h-[30rem] lg:w-[50rem] lg:h-[30rem]xl:w-[50rem] xl:h-[30rem]"
        >
          <Image
            src={Titan}
            alt="titan"
            fill
            className="object-cover object-top blur-xs"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          id="bg"
          className="absolute bottom-0 left-0 w-full inset-0 top-45 md:top-40"
        >
          <Signage />
          <Image
            src={wall}
            alt="wall"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>
        <div id="meInfo" className="relative z-30 w-full h-screen">
          <motion.div
            variants={imageVariants}
            id="mePhoto"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10
             w-full h-[85vh] md:h-[90vh] max-w-[450px] max-h-[850px] md:max-h-[1000px] lg:max-h-[1024px]
             flex justify-center items-end"
          >
            <Image src={me} alt="me" fill className="object-cover object-top" />
          </motion.div>

          {/* ———————————————————————————————————— intro import ——— */}
          <motion.div variants={itemVariants} className="relative pointer-events-auto">
            <Intro />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
