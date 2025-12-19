"use client";
import Image from "next/image";
import AboutImage from "../assets/about.png";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function About({ loading }) {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);
  const router = useRouter();

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
      { threshold: 0.6 }
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
        variants={containerVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h1
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-4xl mb-4 text-header md:mb-8 lg:mb-12"
        >
          THE DIGITAL SCOUT ────
        </motion.h1>

        <div className="w-full clearfix">
          <motion.div
            variants={imageVariants}
            className="float-left w-1/2 max-w-[30rem] mr-2 mb-2 md:mr-4 md:mb-4 lg:mr-8 lg:mb-8 relative z-40"
          >
            <Image
              src={AboutImage}
              className="w-full h-auto rounded-xl"
              alt="aboutImage"
            />
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-normal text-base md:text-lg lg:text-xl font-normal leading-4.5 md:leading-6"
          >
            I’m <strong>Joven Serdan Bataller</strong>, a 22-year-old{" "}
            <strong>Full-Stack Web Developer</strong> from the Philippines,
            forged by code and ambition. I build websites like fortresses.
            Modern, resilient, and intuitive, designed to stand out and dominate
            online. I turn ideas into digital realities that empower people and
            businesses to rise above the ordinary and leave their mark in the
            digital world.
          </motion.p>

          <div className="mt-4 sm:mt-8">
            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl p-2 bg-brand rounded text-header"
            >
              EDUCATION
            </motion.h2>
            <motion.ul variants={itemVariants} className="mt-4">
              <li className="flex flex-col text-sm">
                <div className="flex items-start w-full">
                  <span className="flex justify-center items-center md:text-base lg:text-lg p-2 border border-accent rounded-2xl mr-2  md:mr-4 lg:mr-8 w-1/2">
                    2021-2025
                  </span>
                  <div className="text-base md:text-lg lg:text-xl font-bold text-header leading-4 lg:leading-5 w-1/2">
                    INFORMATION TECHNOLOGY
                    <br />
                    <span
                      onClick={() => router.push("https://bicol-u.edu.ph/")}
                      className="text-sm md:text-base lg:text-lg font-normal text-normal leading-2 cursor-pointer hover:underline underline-offset-4 decoration-1 decoration-[var(--color-accent)]"
                    >
                      Bicol University Polangui
                    </span>
                  </div>
                </div>
              </li>
            </motion.ul>
            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl mt-4 p-2 bg-brand rounded text-header"
            >
              EXPERIENCE
            </motion.h2>
            <motion.ul variants={itemVariants} className="mt-4">
              <li className="flex flex-col text-sm">
                <div className="flex items-start w-full">
                  <span className="flex justify-center items-center md:text-base lg:text-lg p-2 px-12 border border-accent rounded-2xl mr-2  md:mr-4 lg:mr-8 w-1/2">
                    2025
                  </span>
                  <div className="text-base md:text-lg lg:text-xl font-bold text-header leading-4 lg:leading-5 w-1/2">
                    IT SUPPORT | UI/UX DESIGNER
                    <br />
                    <span
                      onClick={() => router.push("https://bytescrafter.net/")}
                      className="text-sm md:text-base lg:text-lg font-normal text-normal leading-2 cursor-pointer hover:underline underline-offset-4 decoration-1 decoration-[var(--color-accent)]"
                    >
                      BytesCrafter I.T Solutions
                    </span>
                  </div>
                </div>
              </li>
            </motion.ul>
          </div>

          {/* ———————————————————————————————————— resume ——— */}
          <motion.a variants={itemVariants} href="Bataller_Resume.pdf" download>
            <button
              className="p-2 sm:p-4 text-base md:text-lg lg:text-xl mt-8 bg-brand rounded shadow-2xl border border-accent transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)] cursor-pointer"
            >
              DOWNLOAD CV
            </button>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}