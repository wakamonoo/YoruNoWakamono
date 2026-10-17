"use client";
import Image from "next/image";
import map from "@/assets/map.png";
import profile from "@/assets/profile.png";
import SurveyCorpsLogo from "@/assets/surveyCorpsLogo.png";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { BsFolderFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { GoTriangleDown } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { LoaderContext } from "@/context/loaderContext";

export default function Hero() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const { loading } = useContext(LoaderContext);

  const greetings = ["Hajimemashite!", "Hello there!", "Kamusta?"];

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
      },
    },
  };

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
      id="hero"
      className="w-full h-screen overflow-hidden"
    >
      <motion.div
        variants={itemVariants}
        className="cursor-pointer transition-all duration-500 hover:scale-110  relative h-full w-full"
      >
        <Image src={map} alt="aot map" fill priority className="object-cover" />
      </motion.div>
      <div className="absolute bg-brand rounded-t-2xl top-1/2 h-[50%] w-full flex flex-col items-center px-4 pb-10">
        <div className="absolute -top-44 mr-32">
          <motion.div
            variants={itemVariants}
            className="relative bg-second rounded-full px-4 py-2"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={greetings[greetingIndex]}
                className="text-sm text-accent whitespace-nowrap"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
                transition={{ staggerChildren: 0.055 }}
                aria-label={greetings[greetingIndex]}
              >
                {greetings[greetingIndex].split("").map((letter, index) => (
                  <motion.span
                    key={`${greetingIndex}-${index}`}
                    variants={letterVariants}
                    className="inline-block"
                    aria-hidden="true"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.p>
            </AnimatePresence>
            <div className="absolute top-5 right-4">
              <GoTriangleDown className="text-4xl text-(--color-secondary)" />
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={itemVariants}
          className="-mt-40 w-60 h-60 border-8 border-(--color-bg) rounded-full overflow-hidden shrink-0"
        >
          <Image
            src={profile}
            alt="Joven Bataller"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="mt-4 w-full px-8 md:px-16 lg:px-32 xl:px-72">
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-tall tracking-wider text-center"
          >
            Joven Bataller
          </motion.h1>
          <motion.p variants={itemVariants} className="text-base text-center">
            Full Stack Developer
          </motion.p>
          <div className="mt-2 flex items-center justify-center gap-2">
            <motion.a
              variants={itemVariants}
              href="https://www.facebook.com/joven.serdanbataller"
            >
              <button className="transition-all duration-200 hover:text-[var(--color-accent)] focus:text-[var(--color-accent)] cursor-pointer">
                <FaFacebookF className="text-xl" />
              </button>
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="https://www.instagram.com/wakamonoooo/"
            >
              <button className="transition-all duration-200 hover:text-[var(--color-accent)] focus:text-[var(--color-accent)] cursor-pointer">
                <FaInstagram className="text-xl" />
              </button>
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="https://www.linkedin.com/in/joven-bataller-085761350/"
            >
              <button className="transition-all duration-200 hover:text-[var(--color-accent)] focus:text-[var(--color-accent)] cursor-pointer">
                <FaLinkedinIn className="text-xl" />
              </button>
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="https://github.com/wakamonoo"
            >
              <button className="transition-all duration-200 hover:text-[var(--color-accent)] focus:text-[var(--color-accent)] cursor-pointer">
                <FaGithub className="text-xl" />
              </button>
            </motion.a>
          </div>
          <div className="mt-2 flex items-center justify-center gap-2">
            <motion.a
              variants={itemVariants}
              href="#portfolio"
              className="flex items-center justify-center gap-2 px-4 py-2 w-fit rounded-md bg-army"
            >
              <BsFolderFill className="text-base srhink-0" />
              <p className="whitespace-nowrap text-base text-normal">
                View Projects
              </p>
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="#contact"
              className="flex items-center justify-center gap-2 px-4 py-2 w-fit rounded-md bg-panel"
            >
              <CiMail className="text-base srhink-0" />
              <p className="whitespace-nowrap text-base text-normal">
                Contact Me
              </p>
            </motion.a>
          </div>
          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center gap-2 w-full"
          >
            <div className="flex-1 h-px bg-accent" />
            <Image
              src={SurveyCorpsLogo}
              alt="Joven Bataller"
              className="w-8 h-8 object-contain"
            />
            <div className="flex-1 h-px bg-accent" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
