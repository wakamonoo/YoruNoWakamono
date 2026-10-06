"use client";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useContext, useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { LoaderContext } from "@/context/loaderContext";

export default function Contact() {
  const { loading } = useContext(LoaderContext);
  const form = useRef();
  const ejssid = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const ejstid = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const ejspk = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

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

  {
    /* ———————————————————————————————————— contact section powered by emailjs ——— */
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(ejssid, ejstid, form.current, ejspk).then(
      () => {
        Swal.fire({
          title: "Mission Accomplished!",
          text: "Intel Transmision Succesful",
          icon: "success",
          background: "#3b2f2f",
          color: "#f5f5f5",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        form.current.reset();
      },
      (error) => {
        Swal.fire({
          title: "Breach Detected!",
          text: "Lost Contact with Recon Unit",
          icon: "error",
          background: "#3b2f2f",
          color: "#f5f5f5",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        console.error(error.text);
      },
    );
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={loading ? "hidden" : undefined}
        whileInView={loading ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1
          variants={itemVariants}
          className="text-2xl mb-4 text-header"
        >
          DISPATCH RESOLVE ────
        </motion.h1>
        <motion.form
          variants={itemVariants}
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-3"
        >
          <input
            placeholder="enter cadet identification (name)"
            name="name"
            required
            type="text"
            className="w-full border bg-panel p-2 rounded text-base"
          />
          <input
            placeholder="your signal relay code (email)"
            name="email"
            required
            type="email"
            className="w-full border bg-panel p-2 rounded text-base"
          />
          <input
            placeholder="mission intent (subject)"
            name="title"
            required
            type="text"
            className="w-full border bg-panel p-2 rounded text-base"
          />
          <textarea
            placeholder="detail your intel (message)"
            name="message"
            required
            type="text"
            className="w-full h-[20vh] border bg-panel p-2 rounded text-base"
          />
          <div>
            <button
              type="submit"
              className="p-2 text-base mt-8 bg-panel rounded shadow-2xl group transition-all duration-200
             hover:bg-[var(--color-accent)] active:bg-[var(--color-accent)] cursor-pointer"
            >
              <p className="text-base text-header transition-all duration-20 group-hover:text-(--color-panel) group-active:text-(--color-panel) uppercase font-heading">
                Alert Headquarters
              </p>
            </button>
          </div>
        </motion.form>

        <motion.p
          variants={itemVariants}
          className="font-normal text-sm py-8 text-muted"
        >
          alternate recon points:
        </motion.p>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={loading ? "hidden" : undefined}
        whileInView={loading ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full mb-16"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.a
            variants={itemVariants}
            href="https://www.facebook.com/joven.serdanbataller"
          >
            <div className="relative p-4 w-full h-full bg-panel group transition-all duration-200 hover:bg-(--color-accent) active:bg-(--color-accent)  rounded overflow-hidden ">
              <div className="relative z-10">
                <div className="text-4xl mb-4 font-header text-header transition-all duration-200 group-hover:text-(--color-panel)">
                  <FaFacebookF />
                </div>
                <h4 className="text-xl font-header text-header transition-all duration-200 group-hover:text-(--color-panel)">
                  Joven Bataller
                </h4>
              </div>
            </div>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="https://www.instagram.com/wakamonoooo/"
          >
            <div className="relative p-4 w-full h-full bg-panel group transition-all duration-200 hover:bg-(--color-accent) active:bg-(--color-accent)  rounded overflow-hidden ">
              <div className="relative z-10">
                <div className="text-4xl mb-4 font-header text-header transition-all duration-200 group-hover:text-(--color-panel)">
                  <FaInstagram />
                </div>
                <h4 className="text-xl font-header text-header transition-all duration-200 group-hover:text-(--color-panel)">
                  wakamonoooo
                </h4>
              </div>
            </div>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="https://www.linkedin.com/in/joven-bataller-085761350/"
          >
            <div className="relative p-4 w-full h-full bg-panel group transition-all duration-200 hover:bg-(--color-accent) active:bg-(--color-accent)  rounded overflow-hidden ">
              <div className="relative z-10">
                <div className="text-4xl mb-4 font-header text-header transition-all duration-200 group-hover:text-(--color-panel)">
                  <FaLinkedinIn />
                </div>
                <h4 className="text-xl font-header text-header transition-all duration-200 group-hover:text-(--color-panel)">
                  Joven Bataller
                </h4>
              </div>
            </div>
          </motion.a>

          <motion.a variants={itemVariants} href="https://github.com/wakamonoo">
            <div className="relative p-4 w-full h-full bg-panel group transition-all duration-200 hover:bg-(--color-accent) active:bg-(--color-accent)  rounded overflow-hidden ">
              <div className="relative z-10">
                <div className="text-4xl mb-4 font-header text-header transition-all duration-200 group-hover:text-(--color-panel)">
                  <FaGithub />
                </div>
                <h4 className="text-xl font-header text-header transition-all duration-200 group-hover:text-(--color-panel)">
                  wakamonoo
                </h4>
              </div>
            </div>
          </motion.a>
        </div>
      </motion.div>
    </>
  );
}
