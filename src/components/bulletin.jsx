import { useRouter } from "next/navigation";
import Marquee from "react-fast-marquee";
import Nexus from "@/assets/nexus_logo.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaBullhorn } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { MdFiberManualRecord } from "react-icons/md";

export default function Bulletin({ loading }) {
  const router = useRouter();
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="overflow-hidden w-full"
    >
      <motion.div variants={itemVariants} className="flex items-center gap-2">
        <Marquee
          pauseOnHover={true}
          speed={80}
          className="cursor-pointer bg-panel"
        >
          <h1 className="text-base md:text-lg lg:text-xl font-tall text-header bg-brand border-x-3 border-[var(--color-secondary)] p-4">
            Regiment Bulletin:
          </h1>
          <MdFiberManualRecord className="text-base md:text-lg lg:text-xl m-2" />
          <div className="flex items-center px-4">
            <p className="text-sm md:text-base lg:text-lg text-normal">
              I am open for website programming gigs and part-time or full-time
              work in Junior Developer roles. I specialize in building modern
              full-stack web applications using the MERN stack, Next.js, and
              other modern web technologies. I am eager to contribute to
              real-world projects, collaborate with teams, and continue growing
              my skills through practical development experience.
            </p>
            <button
              className="px-4 rounded-full bg-army m-4 cursor-pointer transition-all duration-300 hover:scale-x-110 focus:scale-x-110"
              onClick={() =>
                (window.location.href =
                  "mailto:joven.serdanbataller21@gmail.com")
              }
            >
              <p className="text-sm md:text-base lg:text-lg font-bold">
                Hire me!
              </p>
            </button>
          </div>
        </Marquee>
      </motion.div>
    </motion.div>
  );
}
