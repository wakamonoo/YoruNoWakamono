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

          <div className="flex items-center">
            <FaBullhorn className="text-base md:text-lg lg:text-xl m-2" />
            <p className="text-sm md:text-base lg:text-lg font-normal text-normal">
              Attention, everyone! I proudly report that I have completed
              another mission, called
            </p>
            <Image
              src={Nexus}
              alt="nexus"
              width={0}
              height={0}
              sizes="100vw"
              className="w-14 md:w-16 lg:w-18 h-auto object-contain ml-2"
            />
            <p className="text-sm md:text-base lg:text-lg font-normal text-normal">
              . This is a Marvel Cinematic Universe outpost where fans can
              gather, share intel on the timeline, track their watch progress,
              debate which titles reign supreme, and much more. I urge all
              recruits to venture forth, explore the site, and press the button
              to advance.
            </p>
            <button
              className="px-4 rounded-full bg-army m-4 cursor-pointer transition-all duration-300 hover:scale-x-110 focus:scale-x-110"
              onClick={() => router.push("https://nexus-wakamonoo.vercel.app")}
            >
              <p className="text-sm md:text-base lg:text-lg font-bold">Visit</p>
            </button>
          </div>
          <MdFiberManualRecord className="text-base md:text-lg lg:text-xl m-2" />
          <div className="flex items-center px-4">
            <p className="text-sm md:text-base lg:text-lg font-bold text-normal uppercase">
              I am open to work in Junior Developer roles.
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
