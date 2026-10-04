import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { useContext } from "react";
import { MdFiberManualRecord } from "react-icons/md";
import { LoaderContext } from "@/context/loaderContext";

export default function Bulletin() {
  const { loading } = useContext(LoaderContext);

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate={loading ? "hidden" : undefined}
      whileInView={loading ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
      className="flex items-center gap-2 overflow-hidden w-full"
    >
      <Marquee
        pauseOnHover={true}
        speed={80}
        className="cursor-pointer bg-panel"
      >
        <h1 className="text-base font-tall text-header bg-brand border-x-3 border-[var(--color-secondary)] p-4">
          Regiment Bulletin:
        </h1>
        <MdFiberManualRecord className="text-base m-2" />
        <div className="flex items-center px-4">
          <p className="text-sm text-normal">
            I am open for website programming gigs and part-time or full-time
            work in Junior Developer roles. I specialize in building modern
            full-stack web applications using the MERN stack, Next.js, and other
            modern web technologies. I am eager to contribute to real-world
            projects, collaborate with teams, and continue growing my skills
            through practical development experience.
          </p>
          <button
            className="px-4 rounded-full bg-army m-4 cursor-pointer transition-all duration-300 hover:scale-x-110 focus:scale-x-110"
            onClick={() =>
              (window.location.href = "mailto:joven.serdanbataller21@gmail.com")
            }
          >
            <p className="text-sm font-bold">Hire me!</p>
          </button>
        </div>
      </Marquee>
    </motion.div>
  );
}
