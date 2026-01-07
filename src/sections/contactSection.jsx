"use client";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

export default function Contact({ loading }) {
  const form = useRef();
  const ejssid = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const ejstid = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const ejspk = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);
  const [inView, setInView] = useState(false);
  const [inView2, setInView2] = useState(false);

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
        { threshold: 0.6 }
      );
      if (ref.current) observer.observe(ref.current);
    };

    createObserver(containerRef, setInView);
    createObserver(containerRef2, setInView2);
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
      }
    );
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
            className="w-full border bg-panel p-2 rounded text-base md:text-lg lg:text-xl"
          />
          <input
            placeholder="your signal relay code (email)"
            name="email"
            required
            type="email"
            className="w-full border bg-panel p-2 rounded text-base md:text-lg lg:text-xl"
          />
          <input
            placeholder="mission intent (subject)"
            name="title"
            required
            type="text"
            className="w-full border bg-panel p-2 rounded text-base md:text-lg lg:text-xl"
          />
          <textarea
            placeholder="detail your intel (message)"
            name="message"
            required
            type="text"
            className="w-full h-[20vh] border bg-panel p-2 rounded text-base md:text-lg lg:text-xl"
          />
          <div>
            <button
              type="submit"
              className="p-2 sm:p-4 text-base md:text-lg lg:text-xl mt-8 bg-brand rounded shadow-2xl border border-accent transition-all duration-200
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)] cursor-pointer"
            >
              ALERT HEADQUARTERS
            </button>
          </div>
        </motion.form>

        <motion.p
          variants={itemVariants}
          className="font-normal text-sm md:text-base lg:text-lg py-8 text-normal"
        >
          alternate recon points:
        </motion.p>
      </motion.div>
      <motion.div
        ref={containerRef2}
        variants={containerVariant}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        className="w-full mb-16"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.a
            variants={itemVariants}
            href="https://www.facebook.com/joven.serdanbataller"
          >
            <div
              className="p-4 sm:p-8 w-full h-full bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-panel)] rounded border transition-all duration-200 hover:[background-image:none]
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
            >
              <div className="text-4xl md:text-5xl mb-4 font-header text-header">
                <FaFacebookF />
              </div>
              <h4 className="text-xl md:text-2xl lg:text-3xl font-header text-header">
                Joven Bataller
              </h4>
            </div>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="https://www.instagram.com/wakamonoooo/"
          >
            <div
              className="p-4 sm:p-8 w-full h-full bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-panel)] rounded border transition-all duration-200 hover:[background-image:none]
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
            >
              <div className="text-4xl md:text-5xl mb-4 font-header text-header">
                <FaInstagram />
              </div>
              <h4 className="text-xl md:text-2xl lg:text-3xl font-header text-header">
                WAKAMONOOOO
              </h4>
            </div>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="https://www.linkedin.com/in/joven-bataller-085761350/"
          >
            <div
              className="p-4 sm:p-8 w-full h-full bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-panel)] rounded border transition-all duration-200 hover:[background-image:none]
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
            >
              <div className="text-4xl md:text-5xl mb-4 font-header text-header">
                <FaLinkedinIn />
              </div>
              <h4 className="text-xl md:text-2xl lg:text-3xl font-header text-header">
                JOVEN BATALLER
              </h4>
            </div>
          </motion.a>

          <motion.a variants={itemVariants} href="https://github.com/wakamonoo">
            <div
              className="p-4 sm:p-8 w-full h-full bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-panel)] rounded border transition-all duration-200 hover:[background-image:none]
             hover:bg-[var(--color-panel)] hover:scale-110 
             active:scale-110 active:bg-[var(--color-panel)]"
            >
              <div className="text-4xl md:text-5xl mb-4 font-header text-header">
                <FaGithub />
              </div>
              <h4 className="text-xl md:text-2xl lg:text-3xl font-header text-header">
                WAKAMONOO
              </h4>
            </div>
          </motion.a>
        </div>
      </motion.div>
    </>
  );
}
