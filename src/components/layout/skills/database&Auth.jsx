"use client";
import { SiFirebase, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

export default function DatabaseAndAuthentication({
  itemVariants,
  iconVariants,
}) {

  return (
    <div>
      <motion.h2
        variants={itemVariants}
        className="w-full text-xl p-2 bg-panel rounded text-header mb-4 mt-4"
      >
        Database & Authentication
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className="text-normal text-justify text-base font-normal leading-tight"
      >
        Managing data storage, retrieval, and user authentication to keep
        information secure and accessible.
      </motion.p>
      <div className="flex flex-wrap gap-2 mt-4">
        <motion.div variants={iconVariants} className="relative group w-fit">
          <div
            tabIndex="0"
            className="p-2 text-5xl text-normal bg-panel rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 hover:shadow-2xl hover:bg-[var(--color-accent)] hover:text-[var(--color-panel)] focus:-translate-y-5  focus:shadow-2xl focus:bg-[var(--color-accent)] focus:text-[var(--color-panel)] focus:-rotate-3  cursor-pointer w-fit h-fit"
          >
            <SiFirebase />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-4 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
            <p className="text-xs">FIREBASE</p>
          </div>
        </motion.div>

        <motion.div variants={iconVariants} className="relative group w-fit">
          <div
            tabIndex="0"
            className="p-2 text-5xl text-normal bg-panel rounded transition-all duration-300 hover:-translate-y-5 hover:-rotate-3 hover:shadow-2xl hover:bg-[var(--color-accent)] hover:text-[var(--color-panel)] focus:-translate-y-5  focus:shadow-2xl focus:bg-[var(--color-accent)] focus:text-[var(--color-panel)] focus:-rotate-3  cursor-pointer w-fit h-fit"
          >
            <SiMongodb />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 delay-50 group-hover:opacity-100 group-focus-within:opacity-100 -mt-4 pointer-events-none text-brand group-hover:text-[var(--color-panel)] group-focus-within:text-[var(--color-panel)] z-10">
            <p className="text-xs">MONGODB</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
