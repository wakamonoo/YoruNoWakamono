import { LoaderContext } from "@/context/loaderContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect, useContext } from "react";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";
import { BiSolidStar } from "react-icons/bi";
import { FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import {
  SiCloudinary,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import NexusImage from "@/assets/nexus.png";

export default function Nexus({ cardVariants }) {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-panel rounded-2xl p-4 border border-[var(--color-army)] flex flex-col gap-2 h-fit w-full overflow-hidden"
    >
      <div className="flex items-start gap-4">
        <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden">
          <Image
            src={NexusImage}
            alt="nexus"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 min-w-0 flex-1">
          <div className="flex flex-col overflow-hidden max-w-lg">
            <p className="text-base font-bold text-header leading-tight uppercase">
              Nexus
            </p>
            <p className="mb-2 text-sm tracking-[0.25em]">
              Marvel community platform.
            </p>
            <Marquee speed={50} className="cursor-pointer p-2">
              <div className="flex gap-4 px-4">
                <div className="w-6 h-6">
                  <SiNextdotjs className="w-full h-full" />
                </div>
                <div className="w-6 h-6">
                  <SiReact className="w-full h-full" />
                </div>
                <div className="w-6 h-6">
                  <SiTailwindcss className="w-full h-full" />
                </div>
                <div className="w-6 h-6">
                  <SiNodedotjs className="w-full h-full" />
                </div>
                <div className="w-6 h-6">
                  <SiMongodb className="w-full h-full" />
                </div>
                <div className="w-6 h-6">
                  <SiFirebase className="w-full h-full" />
                </div>
                <div className="w-6 h-6">
                  <SiExpress className="w-full h-full" />
                </div>
                <div className="w-6 h-6">
                  <SiCloudinary className="w-full h-full" />
                </div>
                <div className="w-6 h-6">
                  <SiSocketdotio className="w-full h-full" />
                </div>
              </div>
            </Marquee>
            <p className="mt-2 text-normal text-justify text-sm font-normal leading-tight">
              A Marvel community for exploring stories, sharing opinions, and
              connecting with fellow fans.
            </p>
          </div>
          <div className="flex justify-end shrink-0 md:self-center md:ml-auto">
            <a
              href="https://ournexus.space"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 items-center justify-center px-4 py-2 rounded-2xl border border-accent"
            >
              <p className="text-sm text-(--color-accent)">View Project</p>
              <FaArrowRight className="text-sm text-(--color-accent) shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
