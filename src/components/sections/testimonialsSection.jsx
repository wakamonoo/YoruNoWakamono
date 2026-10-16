"use client";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import ReyesImg from "@/assets/testimonials/reyes.png";
import { LoaderContext } from "@/context/loaderContext";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    name: "Amjad Reyes",
    role: "Business Owner",
    company: "ignite soles",
    qoute:
      "Joven did a great job bringing our ideas to life. The website looks clean, is easy to navigate, and gives our brand a more professional online presence. We appreciate the effort and attention to detail he put into the project.",
    photo: ReyesImg,
    color: "#c8ff00",
  },
  {
    name: "Joven Bataller",
    role: "Founder",
    company: "nexus",
    qoute:
      "Building Nexus has been an exciting journey. The platform brings Marvel fans together in one place, making it easier to track titles, share reviews, and connect with other fans.",
    photo: ReyesImg,
    color: "#c8ff00",
  },
  {
    name: "Daniel Santos",
    role: "Small Business Owner",
    company: "local business",
    qoute:
      "The website gives our business a more professional look online. It makes our services easier to explore and gives customers a convenient way to learn more about what we offer.",
    photo: ReyesImg,
    color: "#c8ff00",
  },
  {
    name: "Mikaela Cruz",
    role: "Creative Director",
    company: "creative studio",
    qoute:
      "I appreciate how the design balances visual appeal with usability. Everything feels organized, and the details make the overall experience feel polished and consistent.",
    photo: ReyesImg,
    color: "#c8ff00",
  },
  {
    name: "Adrian Mendoza",
    role: "Project Collaborator",
    company: "independent project",
    qoute:
      "Joven puts thought into how things work, not just how they look. The result is a clean, functional experience that feels straightforward and easy to use.",
    photo: ReyesImg,
    color: "#c8ff00",
  },
];

export default function Testimonials() {
  const { loading } = useContext(LoaderContext);
  const [cards, setCards] = useState(testimonials);
  const [animating, setAnimating] = useState(false);

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

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  function nextCard() {
    if (animating || cards.length < 2) return;

    setAnimating(true);

    setTimeout(() => {
      setCards((current) => [...current.slice(1), current[0]]);
      setAnimating(false);
    }, 350);
  }

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={loading ? "hidden" : undefined}
        whileInView={loading ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={itemVariants}
          className="flex gap-2 items-center w-full mt-8"
        >
          <h1 className="text-2xl text-header uppercase">
            Client Testimonials
          </h1>
          <div className="w-12 h-px bg-accent shrink-0" />
        </motion.div>
        <motion.p
          variants={itemVariants}
          className="mt-4 text-normal text-justify text-base  font-normal leading-tight"
        >
          A few words from the people behind the projects I've had the
          opportunity to work on.
        </motion.p>
        <motion.div
          variants={cardVariants}
          className="mt-4 flex justify-center"
        >
          <div className="relative h-[350px] w-full max-w-[440px]">
            {cards.map((testimonial, index) => (
              <motion.button
                key={testimonial.name}
                type="button"
                onClick={nextCard}
                disabled={animating || index !== 0}
                initial={false}
                animate={{
                  y: index * 12,
                  scale: 1 - index * 0.045,
                  rotate: index * 2.5,
                  opacity: 1 - index * 0.12,
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 25,
                }}
                style={{
                  zIndex: cards.length - index,
                  transformOrigin: "center center",
                  pointerEvents: index === 0 ? "auto" : "none",
                }}
                className="cursor-pointer absolute inset-x-0 top-0 flex h-fit flex-col rounded-2xl bg-panel shadow-2xl p-4"
              >
                <div className="flex items-center justify-between">
                  <FaQuoteLeft className="text-base shrink-0" />
                  <span className="text-xs uppercase tracking-widest">
                    0
                    {testimonials.findIndex(
                      (item) => item.name === testimonial.name,
                    ) + 1}
                  </span>
                </div>
                <p className="mt-4 flex-1 text-justify text-base">
                  {testimonial.qoute}
                </p>
                <div className="w-full h-px bg-accent my-4" />
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 overflow-hidden rounded-full shrink-0">
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-sm">{testimonial.name}</p>
                    <p className="text-xs">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
