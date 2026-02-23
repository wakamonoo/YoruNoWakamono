import Image from "next/image";
import Cap from "@/assets/nexus/cap.png";
import IronMan from "@/assets/nexus/ironman.png";
import Thor from "@/assets/nexus/thor.png";
import Hulk from "@/assets/nexus/hulk.png";
import Widow from "@/assets/nexus/widow.png";
import HawkEye from "@/assets/nexus/hawkeye.png";
import Nexus from "@/assets/nexus_logo.png";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Plug({ loading }) {
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

  const logo = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.1, ease: "easeOut" },
    },
  };

  const cap = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const tony = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const thor = {
    hidden: { opacity: 0, y: -120 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const banner = {
    hidden: { opacity: 0, y: -80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const nat = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const clint = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
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

  return (
    <div ref={containerRef}>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="flex relative justify-center w-full">
          <div className="flex relative items-end justify-center">
            <motion.div
              variants={cap}
              sizes="100vw"
              width={0}
              height={0}
              className="w-26 sm:w-30 md:w-38 lg:w-40 xl:w-48  relative z-30 flex-shrink-0"
            >
              <Image src={Cap} alt="cap" />
            </motion.div>

            <motion.div
              variants={tony}
              sizes="100vw"
              width={0}
              height={0}
              className="w-28 sm:w-32 md:w-40 lg:w-44 xl:w-54 relative z-20 -ml-20 mb-35 flex-shrink-0"
            >
              <Image src={IronMan} alt="ironman" />
            </motion.div>

            <motion.div
              variants={thor}
              sizes="100vw"
              width={0}
              height={0}
              className="w-32 sm:w-36 md:w-44 lg:w-48 xl:w-58 relative z-10 -ml-20 flex-shrink-0"
            >
              <Image src={Thor} alt="thor" />
            </motion.div>

            <motion.div
              variants={banner}
              sizes="100vw"
              width={0}
              height={0}
              className="w-56 sm:w-60 md:w-68 lg:w-74 xl:w-86 relative z-5 -ml-26 flex-shrink-0"
            >
              <Image src={Hulk} alt="hulk" />
            </motion.div>

            <motion.div
              variants={nat}
              sizes="100vw"
              width={0}
              height={0}
              className="w-24 sm:w-28 md:w-36 lg:w-40 xl:w-46 relative z-40 -ml-30 mb-4 flex-shrink-0"
            >
              <Image src={Widow} alt="widow" />
            </motion.div>

            <motion.div
              variants={clint}
              sizes="100vw"
              width={0}
              height={0}
              className="w-44 sm:w-48 md:w-58 lg:w-64 xl:w-76 relative z-50 -ml-24 flex-shrink-0"
            >
              <Image src={HawkEye} alt="hawkeye" />
            </motion.div>
            <motion.div
              variants={logo}
              sizes="100vw"
              width={0}
              height={0}
              className="absolute left-1/2 -translate-x-1/2 bottom-0 opacity-90 mb-42 z-0 w-[90%]"
            >
              <Image src={Nexus} alt="nexus logo" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
