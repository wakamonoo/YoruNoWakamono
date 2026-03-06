"use client";
import Image from "next/image";
import Work1 from "../assets/work-1.png";
import Work2 from "../assets/work-2.png";
import Work3 from "../assets/work-3.png";
import Work4 from "../assets/work-4.png";
import Work5 from "../assets/work-5.png";
import Work6 from "../assets/work-6.png";
import Work7 from "../assets/work-7.png";
import Work8 from "../assets/work-8.png";
import Work9 from "../assets/work-9.png";
import Work10 from "../assets/work-10.png";
import Work11 from "../assets/work-11.png";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiKotlin,
  SiMysql,
  SiPhp,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiCloudinary,
} from "react-icons/si";
import { useState, useRef, useEffect } from "react";
import { motion, stagger } from "framer-motion";

export default function Portfolio({ loading }) {
  const [showProjects, setShowProjects] = useState(false);
  const [showMinorProjects, setShowMinorProjects] = useState(false);
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);
  const [inView, setInView] = useState(false);
  const [inView2, setInView2] = useState(false);
  const [inView3, setInView3] = useState(false);

  useEffect(() => {
    if (loading) return;

    const createObserver = (ref, setVisible) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.4 }
      );
      if (ref.current) observer.observe(ref.current);
    };

    createObserver(containerRef, setInView);
    createObserver(containerRef2, setInView2);
    createObserver(containerRef3, setInView3);
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

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.div
        ref={containerRef}
        variants={containerVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h1
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-4xl mb-4 text-header md:mb-8 lg:mb-12"
        >
          RECON MISSIONS ────
        </motion.h1>

        <div>
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl p-2 bg-brand rounded text-header mb-4"
          >
            TACTICAL CAMPAIGNS
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-normal text-justify text-base md:text-lg lg:text-xl font-normal leading-4.5 md:leading-6 mb-4 md:mb-8"
          >
            Full-scale operations executed by the elite Survey Corps, these are
            high-impact missions demanding precise strategy, relentless
            execution, and adaptability in hostile and ever-shifting
            environments. Each deployment is a testament to survival,
            innovation, and pushing past the walls of convention.
          </motion.p>
          <motion.div
            variants={cardVariants}
            className="grid grid-cols-1 xl:grid-cols-2 gap-4"
          >
            <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-9xl focus:shadow-2xl hover:shadow-2xl duration-200 ease-in-out">
              <div className="flex justify-between">
                <Image
                  src={Work1}
                  alt="project"
                  className="w-[8rem] md:w-[11rem] h-auto rounded"
                />
                <div className="w-full ml-2 sm:ml-4">
                  <h4 className="text-lg md:text-xl lg:text-2xl text-header">
                    FIRSTRESPONSE
                  </h4>
                  <p className="text-sm md:text-base lg:text-lg leading-4 lg:leading-5 md:mt-2 text-normal">
                    First aid and emergency response application for the 3rd
                    District of Albay, Bicol Region.
                  </p>
                  <div className="flex gap-2 mt-2 text-xl md:text-2xl lg:text-3xl text-normal">
                    <SiKotlin />
                    <SiFirebase />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                  <a href="https://drive.google.com/drive/folders/17kHeyMQZClrlnOXBPFTKUoWeTgtjLhfS">
                    <button
                      className="text-center font-normal text-sm md:text-base lg:text-lg p-2 sm:p-4 bg-panel rounded text-header hover:text-[var(--color-panel)] active:text-[var(--color-panel)] w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)] hover:shadow-2xl active:shadow-2xl"
                    >
                      Engange Mission
                    </button>
                  </a>
                  <a href="https://github.com/wakamonoo/FirstResponse">
                    <button
                      className="text-center font-normal text-sm md:text-base lg:text-lg p-2 sm:p-4 bg-panel rounded text-header hover:text-[var(--color-panel)] active:text-[var(--color-panel)] w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)] hover:shadow-2xl active:shadow-2xl"
                    >
                      Open War Archives
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-9xl focus:shadow-2xl hover:shadow-2xl duration-200 ease-in-out">
              <div className="flex justify-between">
                <Image
                  src={Work2}
                  alt="project"
                  className="w-[8rem] md:w-[11rem] h-auto rounded"
                />
                <div className="w-full ml-2 sm:ml-4">
                  <h4 className="text-lg md:text-xl lg:text-2xl text-header">
                    REVVED
                  </h4>
                  <p className="text-sm md:text-base lg:text-lg leading-4 lg:leading-5 md:mt-2 text-normal">
                    Web-based E-commerce platform for motorcycle parts and
                    accessories.
                  </p>
                  <div className="flex gap-2 mt-2 text-xl md:text-2xl lg:text-3xl text-normal">
                    <SiPhp />
                    <SiCss3 />
                    <SiMysql />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                  <a href="https://drive.google.com/drive/folders/1tnvcrwOfpoEowmRXJ7boxzOotpQxEaxO">
                    <button
                      className="text-center font-normal text-sm md:text-base lg:text-lg p-2 sm:p-4 bg-panel rounded text-header hover:text-[var(--color-panel)] active:text-[var(--color-panel)] w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)] hover:shadow-2xl active:shadow-2xl"
                    >
                      Engange Mission
                    </button>
                  </a>
                  <a href="https://github.com/wakamonoo/RevvedEcommerce">
                    <button
                      className="text-center font-normal text-sm md:text-base lg:text-lg p-2 sm:p-4 bg-panel rounded text-header hover:text-[var(--color-panel)] active:text-[var(--color-panel)] w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)] hover:shadow-2xl active:shadow-2xl"
                    >
                      Open War Archives
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {showProjects && (
              <div className="contents">
                <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-9xl focus:shadow-2xl hover:shadow-2xl duration-200 ease-in-out">
                  <div className="flex justify-between">
                    <Image
                      src={Work3}
                      alt="project"
                      className="w-[8rem] md:w-[11rem] h-auto rounded"
                    />
                    <div className="w-full ml-2 sm:ml-4">
                      <h4 className="text-lg md:text-xl lg:text-2xl text-header">
                        ANCESTORY
                      </h4>
                      <p className="text-sm md:text-base lg:text-lg leading-4 lg:leading-5 md:mt-2 text-normal">
                        Interactive website for local-folk stories.
                      </p>
                      <div className="flex gap-2 mt-2 text-xl md:text-2xl lg:text-3xl text-normal">
                        <SiHtml5 />
                        <SiCss3 />
                        <SiJavascript />
                        <SiFirebase />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                      <a href="https://ancestory-wakamonoo.vercel.app">
                        <button
                          className="text-center font-normal text-sm md:text-base lg:text-lg leading-4 p-2 sm:p-4 bg-panel rounded text-header hover:text-[var(--color-panel)] active:text-[var(--color-panel)] w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)] hover:shadow-2xl active:shadow-2xl"
                        >
                          Breach Walls
                        </button>
                      </a>
                      <a href="https://github.com/wakamonoo/ancestory">
                        <button
                          className="text-center font-normal text-sm md:text-base lg:text-lg leading-4 p-2 sm:p-4 bg-panel rounded text-header hover:text-[var(--color-panel)] active:text-[var(--color-panel)] w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)] hover:shadow-2xl active:shadow-2xl"
                        >
                          Open War Archives
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-9xl focus:shadow-2xl hover:shadow-2xl duration-200 ease-in-out">
                  <div className="flex justify-between">
                    <Image
                      src={Work10}
                      alt="project"
                      className="w-[8rem] md:w-[11rem] h-auto rounded"
                    />
                    <div className="w-full ml-2 sm:ml-4">
                      <h4 className="text-lg md:text-xl lg:text-2xl text-header">
                        NEXUS
                      </h4>
                      <p className="text-sm md:text-base lg:text-lg leading-4 lg:leading-5 md:mt-2 text-normal">
                        MCU fansite to track watch progress, rank titles,
                        interact with community and many more.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2 text-xl md:text-2xl lg:text-3xl text-normal">
                        <SiNextdotjs />
                        <SiReact />
                        <SiTailwindcss />
                        <SiFirebase />
                        <SiNodedotjs />
                        <SiExpress />
                        <SiMongodb />
                        <SiCloudinary />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                      <a href="https://nexus-wakamonoo.vercel.app">
                        <button
                          className="text-center font-normal text-sm md:text-base lg:text-lg leading-4 p-2 sm:p-4 bg-panel rounded text-header hover:text-[var(--color-panel)] active:text-[var(--color-panel)] w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)] hover:shadow-2xl active:shadow-2xl"
                        >
                          Breach Walls
                        </button>
                      </a>
                      <a href="https://github.com/wakamonoo/nexus">
                        <button
                          className="text-center font-normal text-sm md:text-base lg:text-lg leading-4 p-2 sm:p-4 bg-panel rounded text-header hover:text-[var(--color-panel)] active:text-[var(--color-panel)] w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)] hover:shadow-2xl active:shadow-2xl"
                        >
                          Open War Archives
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-9xl focus:shadow-2xl hover:shadow-2xl duration-200 ease-in-out">
                  <div className="flex justify-between">
                    <Image
                      src={Work11}
                      alt="project"
                      className="w-[8rem] md:w-[11rem] h-auto rounded"
                    />
                    <div className="w-full ml-2 sm:ml-4">
                      <h4 className="text-lg md:text-xl lg:text-2xl text-header">
                        ARQILA
                      </h4>
                      <p className="text-sm md:text-base lg:text-lg leading-4 lg:leading-5 md:mt-2 text-normal">
                        Simple, safe, and reliable car rentals with self-drive
                        and chauffeur options.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2 text-xl md:text-2xl lg:text-3xl text-normal">
                        <SiNextdotjs />
                        <SiReact />
                        <SiTailwindcss />
                        <SiFirebase />
                        <SiNodedotjs />
                        <SiExpress />
                        <SiMongodb />
                        <SiCloudinary />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                      <a href="https://arqila-wakamonoo.vercel.app">
                        <button
                          className="text-center font-normal text-sm md:text-base lg:text-lg leading-4 p-2 sm:p-4 bg-panel rounded text-header hover:text-[var(--color-panel)] active:text-[var(--color-panel)] w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)] hover:shadow-2xl active:shadow-2xl"
                        >
                          Breach Walls
                        </button>
                      </a>
                      <a href="https://github.com/wakamonoo/arqila">
                        <button
                          className="text-center font-normal text-sm md:text-base lg:text-lg leading-4 p-2 sm:p-4 bg-panel rounded text-header hover:text-[var(--color-panel)] active:text-[var(--color-panel)] w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)] hover:shadow-2xl active:shadow-2xl"
                        >
                          Open War Archives
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
          <motion.div variants={itemVariants} className="flex">
            <button
              onClick={() => setShowProjects((prev) => !prev)}
              className="p-2 sm:p-4 text-base md:text-lg lg:text-xl mt-8 bg-brand rounded shadow-2xl border border-accent transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)] cursor-pointer"
            >
              {showProjects ? "NIGERO逃げろ!" : "SUSUME進め!"}
            </button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        ref={containerRef2}
        variants={containerVariant}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
      >
        <div>
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl p-2 bg-brand rounded text-header mb-4 mt-8 lg:mt-16"
          >
            ODM FIELD TEST
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-normal text-justify text-base md:text-lg lg:text-xl font-normal leading-4.5 md:leading-6 mb-4 md:mb-8"
          >
            Off-duty developments and training exercises, crafted during moments
            of peace between battles. These small-scale operations serve as
            field drills for mastering new technologies and refining old skills.
            Not every mission makes history, but each one sharpens the blade.
          </motion.p>
          <motion.div
            variants={cardVariants}
            className="grid grid-cols-1 xl:grid-cols-2 gap-4"
          >
            <div className="contents">
              <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-9xl focus:shadow-2xl hover:shadow-2xl duration-200 ease-in-out">
                <div className="flex justify-between">
                  <Image
                    src={Work4}
                    alt="project"
                    className="w-[8rem] md:w-[11rem] h-auto rounded"
                  />
                  <div className="w-full ml-2 sm:ml-4">
                    <h4 className="text-lg md:text-xl lg:text-2xl text-header">
                      SORA
                    </h4>
                    <p className="text-sm md:text-base lg:text-lg leading-4 lg:leading-5 md:mt-2 text-normal">
                      Web-application for tracking weather, time, temperature,
                      sunset and sunrise time in various locations.
                    </p>
                    <div className="flex gap-2 mt-2 text-xl md:text-2xl lg:text-3xl text-normal">
                      <SiHtml5 />
                      <SiJavascript />
                      <SiTailwindcss />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                    <a href="https://sora-wakamonoo.vercel.app">
                      <button
                        className="text-center font-normal text-sm md:text-base lg:text-lg leading-4 p-2 sm:p-4 bg-panel rounded text-header hover:text-[var(--color-panel)] active:text-[var(--color-panel)] w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)] hover:shadow-2xl active:shadow-2xl"
                      >
                        Breach Walls
                      </button>
                    </a>
                    <a href="https://github.com/wakamonoo/Sora">
                      <button
                        className="text-center font-normal text-sm md:text-base lg:text-lg leading-4 p-2 sm:p-4 bg-panel rounded text-header hover:text-[var(--color-panel)] active:text-[var(--color-panel)] w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)] hover:shadow-2xl active:shadow-2xl"
                      >
                        Open War Archives
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-9xl focus:shadow-2xl hover:shadow-2xl duration-200 ease-in-out">
                <div className="flex justify-between">
                  <Image
                    src={Work5}
                    alt="project"
                    className="w-[8rem] md:w-[11rem] h-auto rounded"
                  />
                  <div className="w-full ml-2 sm:ml-4">
                    <h4 className="text-lg md:text-xl lg:text-2xl text-header">
                      DEBTFLIX
                    </h4>
                    <p className="text-sm md:text-base lg:text-lg leading-4 lg:leading-5 md:mt-2 text-normal">
                      A useful but naughty way of Debt-Tracking.
                    </p>
                    <div className="flex gap-2 mt-2 text-xl md:text-2xl lg:text-3xl text-normal">
                      <SiHtml5 />
                      <SiJavascript />
                      <SiTailwindcss />
                      <SiFirebase />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                    <a href="https://debtflix-wakamonoo.vercel.app">
                      <button
                        className="text-center font-normal text-sm md:text-base lg:text-lg leading-4 p-2 sm:p-4 bg-panel rounded text-header hover:text-[var(--color-panel)] active:text-[var(--color-panel)] w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)] hover:shadow-2xl active:shadow-2xl"
                      >
                        Breach Walls
                      </button>
                    </a>
                    <a href="https://github.com/wakamonoo/Debtflix">
                      <button
                        className="text-center font-normal text-sm md:text-base lg:text-lg leading-4 p-2 sm:p-4 bg-panel rounded text-header hover:text-[var(--color-panel)] active:text-[var(--color-panel)] w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)] hover:shadow-2xl active:shadow-2xl"
                      >
                        Open War Archives
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {showMinorProjects && (
                <div className="contents">
                  <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-9xl focus:shadow-2xl hover:shadow-2xl duration-200 ease-in-out">
                    <div className="flex justify-between">
                      <Image
                        src={Work6}
                        alt="project"
                        className="w-[8rem] md:w-[11rem] h-auto rounded"
                      />
                      <div className="w-full ml-2 sm:ml-4">
                        <h4 className="text-lg md:text-xl lg:text-2xl text-header">
                          KANDILI
                        </h4>
                        <p className="text-sm md:text-base lg:text-lg leading-4 lg:leading-5 md:mt-2 text-normal">
                          Your cute and aesthetic digital diary, be private or
                          connect with friends.
                        </p>
                        <div className="flex gap-2 mt-2 text-xl md:text-2xl lg:text-3xl text-normal">
                          <SiHtml5 />
                          <SiJavascript />
                          <SiTailwindcss />
                          <SiFirebase />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                        <a href="https://kandili-wakamonoo.vercel.app">
                          <button
                            className="text-center font-normal text-sm md:text-base lg:text-lg leading-4 p-2 sm:p-4 bg-panel rounded text-header hover:text-[var(--color-panel)] active:text-[var(--color-panel)] w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)] hover:shadow-2xl active:shadow-2xl"
                          >
                            Breach Walls
                          </button>
                        </a>
                        <a href="https://github.com/wakamonoo/Kandili">
                          <button
                            className="text-center font-normal text-sm md:text-base lg:text-lg leading-4 p-2 sm:p-4 bg-panel rounded text-header hover:text-[var(--color-panel)] active:text-[var(--color-panel)] w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)] hover:shadow-2xl active:shadow-2xl"
                          >
                            Open War Archives
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-9xl focus:shadow-2xl hover:shadow-2xl duration-200 ease-in-out">
                    <div className="flex justify-between">
                      <Image
                        src={Work7}
                        alt="project"
                        className="w-[8rem] md:w-[11rem] h-auto rounded"
                      />
                      <div className="w-full ml-2 sm:ml-4">
                        <h4 className="text-lg md:text-xl lg:text-2xl text-header">
                          TODOCHAN
                        </h4>
                        <p className="text-sm md:text-base lg:text-lg leading-4 lg:leading-5 md:mt-2 text-normal">
                          A minimalist to-do list web app focused on simplicity
                          and ease of use
                        </p>
                        <div className="flex gap-2 mt-2 text-xl md:text-2xl lg:text-3xl text-normal">
                          <SiHtml5 />
                          <SiJavascript />
                          <SiTailwindcss />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                        <a href="https://todochan-wakamonoo.vercel.app">
                          <button
                            className="text-center font-normal text-sm md:text-base lg:text-lg leading-4 p-2 sm:p-4 bg-panel rounded text-header hover:text-[var(--color-panel)] active:text-[var(--color-panel)] w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)] hover:shadow-2xl active:shadow-2xl"
                          >
                            Breach Walls
                          </button>
                        </a>
                        <a href="https://github.com/wakamonoo/Todochan">
                          <button
                            className="text-center font-normal text-sm md:text-base lg:text-lg leading-4 p-2 sm:p-4 bg-panel rounded text-header hover:text-[var(--color-panel)] active:text-[var(--color-panel)] w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)] hover:shadow-2xl active:shadow-2xl"
                          >
                            Open War Archives
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-9xl focus:shadow-2xl hover:shadow-2xl duration-200 ease-in-out">
                    <div className="flex justify-between">
                      <Image
                        src={Work8}
                        alt="project"
                        className="w-[8rem] md:w-[11rem] h-auto rounded"
                      />
                      <div className="w-full ml-2 sm:ml-4">
                        <h4 className="text-lg md:text-xl lg:text-2xl text-header">
                          POINTCITY
                        </h4>
                        <p className="text-sm md:text-base lg:text-lg leading-4 lg:leading-5 md:mt-2 text-normal">
                          Online and offline basketball stats-tracker.
                        </p>
                        <div className="flex gap-2 mt-2 text-xl md:text-2xl lg:text-3xl text-normal">
                          <SiHtml5 />
                          <SiJavascript />
                          <SiTailwindcss />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                        <a href="https://pointcity-wakamonoo.vercel.app">
                          <button
                            className="text-center font-normal text-sm md:text-base lg:text-lg leading-4 p-2 sm:p-4 bg-panel rounded text-header hover:text-[var(--color-panel)] active:text-[var(--color-panel)] w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)] hover:shadow-2xl active:shadow-2xl"
                          >
                            Breach Walls
                          </button>
                        </a>
                        <a href="https://github.com/wakamonoo/PointCity">
                          <button
                            className="text-center font-normal text-sm md:text-base lg:text-lg leading-4 p-2 sm:p-4 bg-panel rounded text-header hover:text-[var(--color-panel)] active:text-[var(--color-panel)] w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)] hover:shadow-2xl active:shadow-2xl"
                          >
                            Open War Archives
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-8 bg-brand w-full h-full rounded shadow-9xl focus:shadow-2xl hover:shadow-2xl duration-200 ease-in-out">
                    <div className="flex justify-between">
                      <Image
                        src={Work9}
                        alt="project"
                        className="w-[8rem] md:w-[11rem] h-auto rounded"
                      />
                      <div className="w-full ml-2 sm:ml-4">
                        <h4 className="text-lg md:text-xl lg:text-2xl text-header">
                          RINA
                        </h4>
                        <p className="text-sm md:text-base lg:text-lg leading-4 lg:leading-5 md:mt-2 text-normal">
                          A browser extension for youtube assistance. Primary
                          use of voice commands for tab control
                        </p>
                        <div className="flex gap-2 mt-2 text-xl md:text-2xl lg:text-3xl text-normal">
                          <SiHtml5 />
                          <SiJavascript />
                          <SiTailwindcss />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                        <a href="https://rina-wakamonoo.vercel.app">
                          <button
                            className="text-center font-normal text-sm md:text-base lg:text-lg leading-4 p-2 sm:p-4 bg-panel rounded text-header hover:text-[var(--color-panel)] active:text-[var(--color-panel)] w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)] hover:shadow-2xl active:shadow-2xl"
                          >
                            Breach Walls
                          </button>
                        </a>
                        <a href="https://github.com/wakamonoo/Rina">
                          <button
                            className="text-center font-normal text-sm md:text-base lg:text-lg leading-4 p-2 sm:p-4 bg-panel rounded text-header hover:text-[var(--color-panel)] active:text-[var(--color-panel)] w-full cursor-pointer transition-all duration-200
                       hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)] hover:shadow-2xl active:shadow-2xl"
                          >
                            Open War Archives
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex">
            <button
              onClick={() => setShowMinorProjects((prevs) => !prevs)}
              className="p-2 sm:p-4 text-base md:text-lg lg:text-xl mt-8 bg-brand rounded shadow-2xl border border-accent transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)] cursor-pointer"
            >
              {showMinorProjects ? "NIGERO逃げろ!" : "SUSUME進め!"}
            </button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        ref={containerRef3}
        variants={containerVariant}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
      >
        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl p-2 bg-brand rounded text-header mb-4 mt-8 lg:mt-16"
        >
          BATTLE RECORD
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-normal text-justify text-base md:text-lg lg:text-xl font-normal leading-4.5 md:leading-6 mb-4 md:mb-8"
        >
          Beyond the walls of hesitation lies the battlefield of creation. Every
          commit is a battle, every push a charge into the unknown. Here stands
          the record of every campaign fought in code.
        </motion.p>
        <motion.div variants={cardVariants}>
          <img
            src="https://ghchart.rshah.org/6f553f/wakamonoo"
            alt="git contributions"
            className="w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </>
  );
}
