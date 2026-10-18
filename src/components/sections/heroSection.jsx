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
import ImagesLightbox from "../layout/lightBox/imagesLightbox";

export default function Hero() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const { loading } = useContext(LoaderContext);
  const [origin, setOrigin] = useState("50% 50%");
  const [scale, setScale] = useState(1);
  const [showImagesLightbox, setShowImagesLightbox] = useState(false);

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

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setOrigin(`${x}% ${y}%`);
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={loading ? "hidden" : undefined}
        whileInView={loading ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2 }}
        id="hero"
        className="relative w-full"
      >
        <div className="absolute inset-x-0 top-0 z-0 h-screen w-full overflow-hidden">
          <motion.div
            variants={itemVariants}
            onMouseEnter={() => setScale(1.05)}
            onMouseLeave={() => {
              setScale(1);
              setOrigin("50% 50%");
            }}
            onTouchStart={() => setScale(1.05)}
            onTouchEnd={() => {
              setScale(1);
              setOrigin("50% 50%");
            }}
            onMouseMove={handleMove}
            onTouchMove={(e) => {
              const touch = e.touches[0];
              const rect = e.currentTarget.getBoundingClientRect();

              const x = ((touch.clientX - rect.left) / rect.width) * 100;
              const y = ((touch.clientY - rect.top) / rect.height) * 100;

              setOrigin(`${x}% ${y}%`);
            }}
            animate={{
              scale: scale,
              transformOrigin: origin,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="cursor-pointer relative h-full w-full"
          >
            <Image
              src={map}
              alt="aot map"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-transparent via-5% to-(--color-bg)" />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen items-center justify-center pointer-events-none">
          <div className="absolute z-10 mb-104 mr-32 pointer-events-auto">
            <motion.div
              variants={itemVariants}
              className="relative bg-second rounded-full px-4 py-2"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={greetings[greetingIndex]}
                  className="text-sm text-normal whitespace-nowrap"
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
            onClick={() => setShowImagesLightbox(true)}
            className="cursor-pointer p-1 rounded-full border-8 border-accent group transition-all duration-200 hover:border-(--color-panel) active:border-(--color-panel) pointer-events-auto"
          >
            <div className=" w-60 h-60 rounded-full border-2 border-accent transition-all duration-200 group-hover:border-(--color-panel) group-active:border-(--color-panel) overflow-hidden shrink-0">
              <Image
                src={profile}
                alt="Joven Bataller"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <div className="mt-4 w-full px-8 md:px-16 lg:px-32 xl:px-72">
            <div className="pointer-events-auto">
              <motion.h1
                variants={itemVariants}
                className="text-4xl font-tall tracking-wider text-center"
              >
                Joven Bataller
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-base text-center"
              >
                Full Stack Developer
              </motion.p>
            </div>
            <div className="mt-2 flex items-center justify-center gap-2 pointer-events-auto">
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
            <div className="mt-2 flex items-center justify-center gap-2 pointer-events-auto">
              <motion.a
                variants={itemVariants}
                href="#portfolio"
                className="flex items-center justify-center gap-2 px-4 py-2 w-fit rounded-md bg-army transition-all duration-200 hover:brightness-90 active:brightness-90"
              >
                <BsFolderFill className="text-base srhink-0" />
                <p className="whitespace-nowrap text-base text-normal">
                  View Projects
                </p>
              </motion.a>
              <motion.a
                variants={itemVariants}
                href="#contact"
                className="flex items-center justify-center gap-2 px-4 py-2 w-fit rounded-md bg-panel transition-all duration-200 hover:brightness-90 active:brightness-90"
              >
                <CiMail className="text-base srhink-0" />
                <p className="whitespace-nowrap text-base text-normal">
                  Contact Me
                </p>
              </motion.a>
            </div>
          </div>

          <motion.div
            variants={itemVariants}
            className="absolute bottom-16 inset-x-0 flex justify-start items-center gap-2 px-8 md:px-16 lg:px-32 xl:px-72"
          >
            <div className="w-10 h-10 opacity-40">
              <Image
                src={SurveyCorpsLogo}
                alt="Joven Bataller"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col opacity-40">
              <div className="flex gap-2 items-center">
                <p className="text-xs uppercase text-accent tracking-widest">
                  Personnel File No. 001
                </p>
                <div className="w-8 h-px bg-accent" />
              </div>
              <p className="text-xs uppercase text-accent">
                Full Stack Division
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {showImagesLightbox && (
        <ImagesLightbox setShowImagesLightbox={setShowImagesLightbox} />
      )}
    </>
  );
}
