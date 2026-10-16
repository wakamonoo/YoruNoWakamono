import { LoaderContext } from "@/context/loaderContext";
import { motion } from "framer-motion";
import { useState, useEffect, useContext } from "react";
import AnceStoryImage from "@/assets/portfolio/ancestory.png";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";
import {
  SiCloudinary,
  SiFirebase,
  SiLeaflet,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function AnceStory({ cardVariants }) {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-panel rounded-2xl p-4 border border-[var(--color-army)] flex flex-col gap-2 h-fit w-full overflow-hidden"
    >
      <div className="flex items-start gap-4">
        <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden">
          <Image
            src={AnceStoryImage}
            alt="ancestory"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 min-w-0 flex-1">
          <div className="flex flex-col overflow-hidden max-w-lg">
            <p className="text-base font-bold text-header leading-tight uppercase">
              AnceStory
            </p>
            <p className="mb-2 text-sm">Digital archive for local stories.</p>
            <Marquee speed={50} className="cursor-pointer p-2">
              <div className="flex gap-4 px-4">
                <div className="w-6 h-6">
                  <SiNextdotjs className="w-full h-full" />
                </div>
                <div className="w-6 h-6">
                  <SiReact className="w-full h-full" />
                </div>
                <div className="w-6 h-6">
                  <SiTypescript className="w-full h-full" />
                </div>
                <div className="w-6 h-6">
                  <SiLeaflet className="w-full h-full" />
                </div>
                <div className="w-6 h-6">
                  <SiTailwindcss className="w-full h-full" />
                </div>
                <div className="w-6 h-6">
                  <SiFirebase className="w-full h-full" />
                </div>
                <div className="w-6 h-6">
                  <SiMongodb className="w-full h-full" />
                </div>
                <div className="w-6 h-6">
                  <SiCloudinary className="w-full h-full" />
                </div>
              </div>
            </Marquee>
            <p className="mt-2 text-muted text-justify text-sm font-normal leading-tight">
              A digital archive for preserving and discovering local stories and
              folklore.
            </p>
          </div>
          <div className="flex justify-end shrink-0 md:self-center md:ml-auto">
            <a
              href="https://ancestory.site"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 items-center justify-center px-4 py-2 rounded-2xl border border-accent group transition-all duration-200
             hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)]"
            >
              <p className="text-sm text-header group-hover:text-(--color-panel) group-active:text-(--color-panel)">
                View Project
              </p>
              <FaArrowRight className="text-sm text-header group-hover:text-(--color-panel) group-active:text-(--color-panel) shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
