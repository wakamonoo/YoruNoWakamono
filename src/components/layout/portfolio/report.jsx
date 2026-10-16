"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { LoaderContext } from "@/context/loaderContext";
import CountUp from "react-countup";
import { FaQuoteLeft } from "react-icons/fa";
import { BiSolidStar } from "react-icons/bi";

export default function Report({ statsInView }) {
  const [count, setCount] = useState({
    usersCount: 0,
    titlesCount: 0,
    reviewsCount: 0,
  });
  const [nexusUsers, setNexusUsers] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [userLoading, setUserLoading] = useState(true);
  const [feedbackLoading, setFeedbackLoading] = useState(true);
  const [animating, setAnimating] = useState(false);
  const feedBackNumbers = useRef(new Map());

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const res = await fetch("/api/nexus/getData");
        const data = await res.json();
        setCount(data);
      } catch (err) {
        console.error("failed to fetch count:", err);
        setCount({
          usersCount: 0,
          titlesCount: 0,
          reviewsCount: 0,
        });
      }
    };

    fetchCounts();
  }, []);

  function nextCard() {
    if (animating || feedbacks.length < 2) return;

    setAnimating(true);

    setTimeout(() => {
      setFeedbacks((current) => [...current.slice(1), current[0]]);
      setAnimating(false);
    }, 250);
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/nexus/getAllUsers");
        const data = await res.json();
        setNexusUsers(data.result);
      } catch (err) {
        console.error("failed to fetch count:", err);
        setNexusUsers(null);
      } finally {
        setUserLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await fetch("/api/nexus/getFeedbacks");
        const data = await res.json();

        setFeedbacks(data.result);
      } catch (err) {
        console.error("failed to fetch count:", err);
        setFeedbacks(null);
      } finally {
        setFeedbackLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  feedbacks.forEach((feedback) => {
    if (!feedBackNumbers.current.has(feedback.feedbackId)) {
      feedBackNumbers.current.set(
        feedback.feedbackId,
        feedBackNumbers.current.size + 1,
      );
    }
  });

  function StarRating({ value }) {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => {
          const active = star <= value;

          return (
            <div
              key={star}
              className={`leading-none transition-opacity cursor-default ${active ? "text-[var(--color-nexus)]" : "text-vibe/20"}`}
            >
              <BiSolidStar />
            </div>
          );
        })}
      </div>
    );
  }
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

  return (
    <div>
      <motion.p
        variants={itemVariants}
        className="mb-2 text-xs uppercase tracking-[0.25em]"
      >
        App Builders PH
      </motion.p>
      <motion.div variants={cardVariants}>
        <iframe
          src="https://appbuildersph.com/embed/apps/Nexus"
          title="Nexus votes on App Builders PH"
          className="w-full"
          height="72"
          style={{ border: 0 }}
          loading="lazy"
          scrolling="no"
        />
      </motion.div>
      <motion.p
        variants={itemVariants}
        className="mb-2 text-xs uppercase tracking-[0.25em]"
      >
        Statistics
      </motion.p>

      <div className="grid grid-cols-3 gap-2">
        <motion.div
          variants={cardVariants}
          className="flex flex-col items-center justify-center rounded-lg p-2 bg-panel"
        >
          {statsInView ? (
            <CountUp
              start={0}
              end={count.usersCount}
              duration={1.5}
              className="block text-base font-extrabold text-accent"
            />
          ) : (
            <p className="block text-base font-extrabold text-accent">0</p>
          )}
          <p className="text-xs text-muted uppercase tracking-[0.25em]">
            Members
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          className="flex flex-col items-center justify-center rounded-lg p-2 bg-panel"
        >
          {statsInView ? (
            <CountUp
              start={0}
              end={count.titlesCount}
              duration={1.5}
              className="block text-base font-extrabold text-accent"
            />
          ) : (
            <p className="block text-base font-extrabold text-accent">0</p>
          )}
          <p className="text-xs text-muted uppercase tracking-[0.25em]">
            Titles
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          className="flex flex-col items-center justify-center rounded-lg p-2 bg-panel"
        >
          {statsInView ? (
            <CountUp
              start={0}
              end={count.reviewsCount}
              duration={1.5}
              className="block text-base font-extrabold text-accent"
            />
          ) : (
            <p className="block text-base font-extrabold text-accent">0</p>
          )}
          <p className="text-xs text-muted uppercase tracking-[0.25em]">
            Reviews
          </p>
        </motion.div>
      </div>

      <div className="mt-4">
        <motion.p
          variants={itemVariants}
          className="mb-2 text-xs uppercase tracking-[0.25em]"
        >
          Community Feedback
        </motion.p>

        <motion.div variants={cardVariants}>
          {userLoading || feedbackLoading ? (
            <div className="animate-pulse w-full h-[220px] bg-army rounded-2xl" />
          ) : feedbacks?.length === 0 ? (
            <div className="bg-[var(--color-army)] rounded-xl px-2 py-4">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 shrink-0">
                  <FaQuoteLeft className="text-xs" />
                </div>
                <p className="text-base text-vibe leading-tight line-clamp-2 mt-2">
                  no community feedback yet
                </p>
              </div>
            </div>
          ) : (
            <div className="relative h-[220px] w-full">
              {feedbacks.map((feedback, index) => {
                const user = nexusUsers.find((u) => u.uid === feedback.userId);

                return (
                  <motion.button
                    key={feedback.feedbackId}
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
                      zIndex: feedbacks.length - index,
                      transformOrigin: "center center",
                      pointerEvents: index === 0 ? "auto" : "none",
                    }}
                    className="cursor-pointer absolute inset-x-0 top-0 flex h-[220px] flex-col rounded-2xl bg-army shadow-2xl p-4"
                  >
                    <div className="flex items-center justify-between">
                      <FaQuoteLeft className="text-base shrink-0" />
                      <span className="text-xs uppercase tracking-widest">
                        {String(
                          feedBackNumbers.current.get(feedback.feedbackId) ??
                            index + 1,
                        ).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-4 flex-1 text-justify text-base line-clamp-3">
                      {feedback.review}
                    </p>
                    <div className="w-full h-px bg-accent my-4" />
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-12 overflow-hidden rounded-full shrink-0">
                        <img
                          src={user?.picture}
                          alt={user?.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-start">
                        <p className="text-sm">{user?.name}</p>
                        <StarRating value={feedback.rating} />
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
