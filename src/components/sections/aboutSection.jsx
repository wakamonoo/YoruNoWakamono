"use client";
import Image from "next/image";
import AboutImage from "@/assets/about.png";
import { motion } from "framer-motion";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { LoaderContext } from "@/context/loaderContext";

export default function About() {
  const { loading } = useContext(LoaderContext);
  const router = useRouter();

  const age =
    new Date().getFullYear() -
    2003 -
    (new Date() < new Date(new Date().getFullYear(), 5, 17));

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

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
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
      <motion.div
        variants={itemVariants}
        className="flex gap-2 items-center w-full mt-8"
      >
        <h1 className="text-2xl text-header uppercase">The Digital Scout</h1>
        <div className="w-12 h-px bg-accent shrink-0" />
      </motion.div>

      <div className="mt-4 w-full clearfix">
        <motion.div
          variants={imageVariants}
          className="float-left w-1/2 max-w-[24rem] mr-2 mb-2 relative z-40"
        >
          <Image
            src={AboutImage}
            className="w-full h-auto rounded-xl"
            alt="aboutImage"
          />
        </motion.div>
        <motion.p
          variants={itemVariants}
          className="text-normal text-justify text-base font-normal leading-tight"
        >
          I’m <strong>Joven Serdan Bataller</strong>, a {age}-year-old{" "}
          <strong>Full-Stack Web Developer</strong> from the Philippines, driven
          by discipline, perseverance, and an unyielding will. I build modern,
          resilient websites designed to stand out in any digital battlefield,
          turning ideas into powerful realities that help people and businesses
          rise above the ordinary.
        </motion.p>

        <div className="mt-4">
          <motion.h2
            variants={itemVariants}
            className="text-xl p-2 bg-panel rounded text-header uppercase"
          >
            Education
          </motion.h2>
          <motion.ul variants={itemVariants} className="mt-4">
            <li className="flex flex-col text-sm">
              <div className="flex items-center gap-2 w-full">
                <span className="flex justify-center items-center text-sm p-2 border border-accent rounded-2xl mr-2 w-1/2">
                  2021-2025
                </span>
                <div className="flex flex-col gap-0.5 w-1/2">
                  <p className="text-base font-bold text-header leading-tight uppercase">
                    Information Technology
                  </p>
                  <span
                    onClick={() => router.push("https://bicol-u.edu.ph/")}
                    className="text-sm font-normal text-muted leading-2 cursor-pointer hover:underline underline-offset-4 decoration-1 decoration-[var(--color-accent)]"
                  >
                    Bicol University Polangui
                  </span>
                </div>
              </div>
            </li>
          </motion.ul>
          <motion.h2
            variants={itemVariants}
            className="text-xl mt-4 p-2 bg-panel rounded text-header"
          >
            EXPERIENCE
          </motion.h2>
          <motion.ul variants={itemVariants} className="mt-4">
            <li className="flex flex-col text-sm">
              <div className="flex items-start w-full">
                <span className="flex justify-center items-center text-sm p-2 border border-accent rounded-2xl mr-2 w-1/2">
                  2025
                </span>
                <div className="flex flex-col gap-0.5 w-1/2">
                  <p className="text-base font-bold text-header leading-tight uppercase">
                    IT Support | UI/UX Designer
                  </p>
                  <span
                    onClick={() => router.push("https://bytescrafter.net/")}
                    className="text-sm font-normal text-muted leading-2 cursor-pointer hover:underline underline-offset-4 decoration-1 decoration-[var(--color-accent)]"
                  >
                    BytesCrafter I.T Solutions
                  </span>
                </div>
              </div>
            </li>
          </motion.ul>
        </div>

        {/* ———————————————————————————————————— resume ——— */}
        <motion.a
          variants={itemVariants}
          href="Joven_Bataller_Resume.pdf"
          download
        >
          <button
            className="p-2 text-base mt-8 bg-panel rounded shadow-2xl group transition-all duration-200
             hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)] cursor-pointer"
          >
            <p className="text-base text-header transition-all duration-20 group-hover:text-(--color-panel) group-active:text-(--color-panel) uppercase font-heading">
              Download CV
            </p>
          </button>
        </motion.a>
      </div>
    </motion.div>
  );
}
